#!/usr/bin/env bash
set -e
git add pages/index.js styles/globals.css public/NOX_home.png 2>/dev/null || true
git commit -m "Hero vernieuwd: titel, tagline en subtiele knoppen (optie 1)"
git push origin main
echo "🚀 Gepusht naar main. Netlify start een nieuwe build."
