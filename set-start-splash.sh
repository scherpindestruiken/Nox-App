#!/usr/bin/env bash
set -e

NAME="splash-iphone15-v2.jpeg"
DEST="public/splash/$NAME"

echo "🌿 Startpagina splash instellen op $DEST"

# Zorg dat de map bestaat
mkdir -p public/splash

# Zet het bestand op de juiste plek
if [ -f "$NAME" ]; then
  mv -f "$NAME" "$DEST"
elif [ -f "public/$NAME" ]; then
  mv -f "public/$NAME" "$DEST"
fi

# Controleer of het bestand er is
[ -f "$DEST" ] || { echo "❌ Bestand ontbreekt op $DEST"; exit 1; }

# Backup CSS
STAMP=$(date +%Y%m%d_%H%M%S)
cp -f styles/globals.css "styles/globals.css.bak.$STAMP"

# Voeg override toe aan CSS
cat >> styles/globals.css <<EOF

/* === Splash override ($STAMP) === */
:root { --header-height: 56px; }
.home { min-height: 100vh; display: grid; grid-template-rows: auto 1fr; }
.splash {
  min-height: calc(100vh - var(--header-height));
  background-image: url("/splash/$NAME") !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
/* === /Splash override === */
EOF

echo "✅ Splash ingesteld: /splash/$NAME"
echo "💾 Backup van globals.css: styles/globals.css.bak.$STAMP"
echo "ℹ️ Test lokaal met: npm run dev → http://localhost:3000"
