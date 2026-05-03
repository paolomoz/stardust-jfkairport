#!/usr/bin/env node
// Build the GitHub Pages artifact: copy stardust/migrated → _site/, then
// rewrite root-relative paths in HTML to include the Pages base prefix.
//
// Usage:
//   node scripts/build-pages.mjs            # uses BASE_PATH env or /stardust-jfkairport
//   BASE_PATH=/foo node scripts/build-pages.mjs
//   node scripts/build-pages.mjs --base /foo --src stardust/migrated --out _site

import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
function arg(name, fallback) {
  const i = args.indexOf('--' + name);
  return i >= 0 ? args[i + 1] : fallback;
}

const BASE = (arg('base', process.env.BASE_PATH || '/stardust-jfkairport')).replace(/\/$/, '');
const SRC = path.resolve(arg('src', 'stardust/migrated'));
const OUT = path.resolve(arg('out', '_site'));

const PREFIXES = [
  'assets', 'dine-shop-relax', 'explore-jfk', 'flights', 'transportation',
  'contact-us', 'feedback', 'lost-and-found', 'alerts-advisories',
  'frequently-asked-questions', 'privacy', 'website-disclaimer', 'images',
];
const PREFIX_RE = PREFIXES.join('|');

// Match attribute paths: href="/foo", src='/foo', action="/foo".
// The path body excludes quote chars so the match can't cross a quote
// boundary (otherwise href="/foo">x<a href=" gobbles two attrs in one go).
const ATTR_RE = new RegExp(
  `\\b(href|src|action)=(["\'])(/(?:${PREFIX_RE})[^"\'\\s>]*)\\2`,
  'g'
);

// Match url(/foo) and url("/foo") and url('/foo') in inline <style> blocks.
const URL_RE = new RegExp(
  `url\\((["\']?)(/(?:${PREFIX_RE})[^)"\'\\s]*)\\1\\)`,
  'g'
);

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) await copyDir(s, d);
    else if (e.isSymbolicLink()) {
      const target = await fs.readlink(s);
      await fs.symlink(target, d);
    } else await fs.copyFile(s, d);
  }
}

async function* walk(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

function rewriteHtml(html) {
  let n = 0;
  const out = html
    .replace(ATTR_RE, (_m, attr, q, p) => { n++; return `${attr}=${q}${BASE}${p}${q}`; })
    .replace(URL_RE, (_m, q, p) => { n++; return `url(${q}${BASE}${p}${q})`; });
  return { out, count: n };
}

async function main() {
  console.log(`build-pages: BASE=${BASE} SRC=${SRC} OUT=${OUT}`);
  await fs.rm(OUT, { recursive: true, force: true });
  await copyDir(SRC, OUT);

  let files = 0, edits = 0;
  for await (const file of walk(OUT)) {
    if (!file.endsWith('.html')) continue;
    const html = await fs.readFile(file, 'utf8');
    const { out, count } = rewriteHtml(html);
    if (count) { await fs.writeFile(file, out); edits += count; }
    files++;
  }

  // Sanity: no leftover href="/<known-prefix> patterns
  let leftover = 0;
  const sample = [];
  for await (const file of walk(OUT)) {
    if (!file.endsWith('.html')) continue;
    const html = await fs.readFile(file, 'utf8');
    const matches = html.match(new RegExp(`\\b(href|src|action)=["\']/(?:${PREFIX_RE})`, 'g'));
    if (matches) {
      leftover += matches.length;
      if (sample.length < 3) sample.push({ file: path.relative(OUT, file), example: matches[0] });
    }
  }

  console.log(`build-pages: ${files} HTML files, ${edits} path rewrites`);
  if (leftover) {
    console.error(`build-pages: ${leftover} unrewritten paths remain`);
    sample.forEach(s => console.error(`  ${s.file}: ${s.example}`));
    process.exit(1);
  }
  console.log('build-pages: OK');
}

main().catch(e => { console.error(e); process.exit(1); });
