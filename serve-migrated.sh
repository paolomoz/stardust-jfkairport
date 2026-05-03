#!/bin/sh
# Serve the migrated site on http://127.0.0.1:8765/
# Open http://127.0.0.1:8765/_site-index.html for the directory of all 56 pages.
cd "$(dirname "$0")"
exec python3 -m http.server 8765 --directory stardust/migrated
