#!/usr/bin/env bash
set -e

IMG_REL="$1"
if [ -z "$IMG_REL" ]; then
  echo "❌ Gebruik: ./set-splash.sh splash/bestand.png"
  echo "   Tip: run eerst:  find public -maxdepth 2 -type f -iname \"*.png\" -o -iname \"*.jpg\" -o -iname \"*.jpeg\""
  exit 1
fi

if [ ! -f "public/$IMG_REL" ]; then
  echo "❌ Bestaat niet: public/$IMG_REL"
  echo "🔎 Kandidaten:"
  find public -maxdepth 2 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | sed 's/^public\///'
  exit 1
fi

[ -d styles ] || { echo "❌ Map 'styles' niet gevonden."; exit 1; }
[ -f styles/globals.css ] || { echo "❌ styles/globals.css ontbreekt."; exit 1; }

STAMP=$(date +%Y%m%d_%H%M%S)
cp -f styles/globals.css "styles/globals.css.bak.$STAMP"

# Voeg een override toe die ALTIJD wint, zodat vorige regels je niet saboteren
cat >> styles/globals.css <<EOF

/* === Splash override ($STAMP) === */
:root { --header-height: 56px; } /* pas aan als je header hoger is */
.home { min-height: 100vh; display: grid; grid-template-rows: auto 1fr; }
.splash {
  min-height: calc(100vh - var(--header-height));
  background-image: url("/$IMG_REL") !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
/* === /Splash override === */
EOF

echo "✅ Splash ingesteld op: /$IMG_REL"
echo "💾 Backup: styles/globals.css.bak.$STAMP"
echo "ℹ️ Start lokaal: npm run dev  → http://localhost:3000"
