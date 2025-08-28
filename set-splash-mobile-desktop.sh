#!/usr/bin/env bash
set -e

MOBILE_REL="splash/splash-iphone15-v3.jpeg"        # hoge-res portret
DESKTOP_REL="splash/splash-desktop-1920x1080.png"  # breedbeeld desktop

[ -f "public/${MOBILE_REL}" ]  || { echo "❌ Ontbreekt: public/${MOBILE_REL}";  exit 1; }
[ -f "public/${DESKTOP_REL}" ] || { echo "❌ Ontbreekt: public/${DESKTOP_REL}"; exit 1; }

STAMP=$(date +%Y%m%d_%H%M%S)
BKDIR=".backup_splash_${STAMP}"
mkdir -p "$BKDIR"

# Backups
[ -f styles/globals.css ] && cp styles/globals.css "$BKDIR/globals.css.bak" || true
[ -f pages/_app.js ]      && cp pages/_app.js      "$BKDIR/_app.js.bak"     || true
[ -f pages/index.js ]     && cp pages/index.js     "$BKDIR/index.js.bak"    || true

# Zorg dat globals.css geladen wordt
mkdir -p pages styles
if [ -f pages/_app.js ]; then
  grep -q 'styles/globals.css' pages/_app.js || sed -i '' '1i\
import "../styles/globals.css";
' pages/_app.js
else
  cat > pages/_app.js <<'EOF'
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) { return <Component {...pageProps} />; }
EOF
fi

# Minimalistische index
cat > pages/index.js <<'EOF'
export default function Home() { return <main className="home" />; }
EOF

# Robuuste CSS (mobiel default, desktop via aspect-ratio)
BUSTER=$(date +%s)
cat > styles/globals.css <<EOF
/* === SPLASH (mobiel + desktop) ${STAMP} === */
*,
*::before,
*::after { box-sizing: border-box; }

html, body, #__next { height: 100%; margin: 0; padding: 0; }

:root {
  --header-height: 56px;
  --page-bg: #000;
}

/* Oude hero/splash rommel neutraliseren */
.hero, .hero--mag, .splash, .splash-img {
  background: none !important;
  background-image: none !important;
  box-shadow: none !important;
}
.hero--mag::after { background: none !important; }
.splash-img { display: none !important; }

/* Pagina container */
.home { min-height: calc(100vh - var(--header-height)); }
@supports (height: 100dvh) { .home { min-height: calc(100dvh - var(--header-height)); } }

/* Achtergrond via html::before (fixed layer) */
html { background: var(--page-bg); }
html::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: var(--page-bg);
  background-image: url("/${MOBILE_REL}?v=${BUSTER}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateZ(0);
}

/* Desktop/breed scherm: schakel naar desktop-plaat */
@media (min-aspect-ratio: 4/3) {
  html::before {
    background-image: url("/${DESKTOP_REL}?v=${BUSTER}");
    background-position: center center;
    background-size: cover;
  }
}

/* Klein portret: iets hoger kaderen indien nodig */
@media (max-width: 420px) and (orientation: portrait) {
  html::before { background-position: center 48%; }
}

/* Basis typografie (optioneel) */
body { color: #eaeaea; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
a { color: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }
/* === /SPLASH === */
EOF

echo "✅ Klaar. Backups → $BKDIR"
echo "ℹ️  Test lokaal: npm run dev  → http://localhost:3000"
