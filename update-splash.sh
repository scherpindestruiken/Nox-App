#!/usr/bin/env bash
set -e

# ==== CONFIG ====
DESKTOP_REL="splash/splash-desktop-1920x1080.jpeg"
MOBILE_REL="splash/splash-iphone15-v2.jpeg"
# ================

DESKTOP_ABS="public/${DESKTOP_REL}"
MOBILE_ABS="public/${MOBILE_REL}"

echo "[*] Controleren of splash-afbeeldingen aanwezig zijn…"
[ -f "${DESKTOP_ABS}" ] || { echo "❌ Niet gevonden: ${DESKTOP_ABS}"; exit 1; }
[ -f "${MOBILE_ABS}" ]  || { echo "❌ Niet gevonden: ${MOBILE_ABS}";  exit 1; }

# Backups
STAMP=$(date +%Y%m%d_%H%M%S)
BKDIR=".backup_splash_${STAMP}"
mkdir -p "${BKDIR}"

echo "[*] Backups maken naar ${BKDIR}"
[ -f pages/index.js ]      && cp pages/index.js      "${BKDIR}/index.js.bak" || true
[ -f pages/_app.js ]       && cp pages/_app.js       "${BKDIR}/app.js.bak"   || true
[ -f styles/globals.css ]  && cp styles/globals.css  "${BKDIR}/globals.css.bak" || true

# Minimale index (geen extra img/hero/knoppen)
mkdir -p pages
cat > pages/index.js <<'EOF'
export default function Home() {
  return <main className="home" />;
}
EOF

# _app.js moet globals.css importeren
mkdir -p pages styles
touch styles/globals.css
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

# CSS override: desktop = 1920x1080, mobiel = iPhone splash
BUSTER=$(date +%s)
cat >> styles/globals.css <<EOF

/* ==== SPLASH OVERRIDE ${STAMP} ==== */
html, body, #__next { height: 100%; margin: 0; padding: 0; }

/* Ruim oude hero/splash achtergronden op */
.hero, .hero--mag, .splash { background: none !important; }
.hero--mag::after { background: none !important; }
.splash-img { display: none !important; } /* mocht die ooit bestaan */

/* Container zelf hoeft niets te doen */
.home { min-height: 100dvh; }

/* Basis: desktop splash */
body {
  background-color: #000 !important;
  background-image: url("/${DESKTOP_REL}?v=${BUSTER}") !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

/* Mobiel: andere splash (small screens) */
@media (max-width: 768px) {
  body {
    background-image: url("/${MOBILE_REL}?v=${BUSTER}") !important;
  }
}
/* ==== /SPLASH OVERRIDE ${STAMP} ==== */
EOF

echo "[✓] Splash ingesteld (desktop: /${DESKTOP_REL}, mobiel: /${MOBILE_REL})"
echo "[i] Test lokaal: npm run dev  → http://localhost:3000"
echo "[i] Tevreden? Run eventueel:  ./update-splash.sh --commit  (commit & push)"

# Optioneel: commit & push
if [ "$1" = "--commit" ]; then
  echo "[*] Commit & push…"
  git add pages/index.js pages/_app.js styles/globals.css
  git commit -m "Start: desktop & mobile splash (body cover) ${STAMP}" || echo "ℹ️  Niets te committen"
  git push origin main || echo "⚠️  Push niet gelukt (controleer remote/branch)."
fi
