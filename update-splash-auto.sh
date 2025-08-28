#!/usr/bin/env bash
set -e

# Welke bestandsNAMEN gebruik je (zonder extensie)
DESKTOP_BASE="splash-desktop-1920x1080"
MOBILE_BASE="splash-iphone15-v2"

# Zoek een bestaande extensie (.png, .jpg, .jpeg) in public/splash/
resolve_img() {
  local base="$1"
  for ext in png jpg jpeg PNG JPG JPEG; do
    if [ -f "public/splash/${base}.${ext}" ]; then
      echo "splash/${base}.${ext}"
      return 0
    fi
  done
  return 1
}

DESKTOP_REL=$(resolve_img "$DESKTOP_BASE") || { echo "ERROR: plaats public/splash/${DESKTOP_BASE}.(png|jpg|jpeg)"; exit 1; }
MOBILE_REL=$(resolve_img "$MOBILE_BASE")   || { echo "ERROR: plaats public/splash/${MOBILE_BASE}.(png|jpg|jpeg)"; exit 1; }

echo "[*] Desktop: ${DESKTOP_REL}"
echo "[*] Mobile : ${MOBILE_REL}"

STAMP=$(date +%Y%m%d_%H%M%S)
BKDIR=".backup_splash_${STAMP}"
mkdir -p "$BKDIR"

# Backups
[ -f pages/index.js ]     && cp pages/index.js     "$BKDIR/index.js.bak"     || true
[ -f pages/_app.js ]      && cp pages/_app.js      "$BKDIR/_app.js.bak"      || true
[ -f styles/globals.css ] && cp styles/globals.css "$BKDIR/globals.css.bak"  || true

# Minimalistische index
mkdir -p pages styles
cat > pages/index.js <<'EOF'
export default function Home() {
  return <main className="home" />;
}
EOF

# Zorg dat globals.css geladen wordt
if [ -f pages/_app.js ]; then
  grep -q 'styles/globals.css' pages/_app.js || sed -i '' '1i\
import "../styles/globals.css";
' pages/_app.js
else
  cat > pages/_app.js <<'EOF'
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
EOF
fi

# CSS overschrijven met juiste extensies
touch styles/globals.css
BUSTER=$(date +%s)
cat >> styles/globals.css <<EOF

/* ==== SPLASH OVERRIDE ${STAMP} (auto-ext) ==== */
html, body, #__next { height: 100%; margin: 0; padding: 0; }

.hero, .hero--mag, .splash { background: none !important; }
.hero--mag::after { background: none !important; }
.splash-img { display: none !important; }

.home { min-height: 100dvh; }

body {
  background-color: #000 !important;
  background-image: url("/${DESKTOP_REL}?v=${BUSTER}") !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

@media (max-width: 768px) {
  body {
    background-image: url("/${MOBILE_REL}?v=${BUSTER}") !important;
  }
}
/* ==== /SPLASH OVERRIDE ==== */
EOF

echo "[OK] Splash ingesteld met autodetect. Backups in: ${BKDIR}"
echo "[i] Test: npm run dev  (open http://localhost:3000)"
echo "[i] Commit: git add pages/index.js pages/_app.js styles/globals.css && git commit -m \"Splash autodetect png/jpg/jpeg\" && git push origin main"
