#!/usr/bin/env bash
set -e

echo "🌿 Hero-update (optie 1) starten..."

# 0) sanity
[ -d pages ] || { echo "❌ Map 'pages' niet gevonden. Voer dit uit in de projectroot."; exit 1; }
[ -d styles ] || { echo "❌ Map 'styles' niet gevonden. Verwacht styles/globals.css te bestaan."; exit 1; }
[ -f styles/globals.css ] || { echo "❌ styles/globals.css ontbreekt."; exit 1; }

# 1) Backups
mkdir -p .backup_hero_$(date +%Y%m%d_%H%M%S)
cp -f pages/index.js .backup_hero_*/index.js.bak 2>/dev/null || true
cp -f styles/globals.css .backup_hero_*/globals.css.bak 2>/dev/null || true

# 2) Bepaal hero-afbeelding uit /public
mkdir -p public
IMG=""
for f in \
  "NOX_home.png" "NOX_home_desktop.png" "Nox_splashscreen.jpeg" "NOX_homescreen.jpeg" \
  "NOX_zittendachterboomzondercamera.jpeg" "NOX_onderbladeren.jpeg" "NOX_indenacht.jpeg" \
  "NOX_paddestoelen.jpeg" "Nox_paddestoelzondercamera.jpeg" "NOX_home.png" "NOX_schoen.jpeg" \
  "NOX_staand.jpeg" "Nox_staandzondercamera.jpeg" "NOX_liggendzondercamera.jpeg" \
  "NOX_hangend.jpeg" "NOX_stiekem.jpeg" "NOX_bessen.jpeg" "Nox_eenkhoorn.jpeg" "NOX_schrijft.jpeg" \
  ; do
  if [ -f "public/$f" ]; then IMG="/$f"; break; fi
done

if [ -z "$IMG" ]; then
  echo "⚠️  Geen geschikte hero-afbeelding gevonden in /public. Maak placeholder."
  # 1x1 wit PNG als noodgreep; ziet er niet mooi uit maar breekt niets
  BASE64_1PX="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottQAAAABJRU5ErkJggg=="
  mkdir -p public
  echo "$BASE64_1PX" | base64 --decode > public/NOX_home.png
  IMG="/NOX_home.png"
fi

echo "🖼  Gebruikte hero-afbeelding: $IMG"

# 3) Schrijf nieuwe pages/index.js (volledig)
cat > pages/index.js <<'EOF'
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="hero hero--mag">
        <div className="hero-inner">
          <h1 className="hero-title">Scherp in de Struiken</h1>
          <p className="hero-tagline">Waar bladeren ritselen en sarcasme groeit.</p>

          <div className="hero-actions">
            <Link href="/blog" className="btn btn-primary">Blog lezen</Link>
            <Link href="/fotopagina" className="btn btn-ghost">Foto’s kijken</Link>
          </div>

          <div className="hero-secondary">
            <Link href="/start" className="text-link">of open het startmenu</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
EOF

# 4) Voeg hero-styles toe aan styles/globals.css (append; overschrijft visueel eerdere hero/cta)
cat >> styles/globals.css <<EOF

/* ====== HERO v2 (optie 1) ====== */
.home {
  min-height: calc(100vh - 56px);
  display: grid;
  place-items: center;
  padding: 24px;
}

.hero--mag {
  position: relative;
  width: 100%;
  min-height: min(74vh, 780px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  overflow: hidden;
  background:
    radial-gradient(1200px 600px at 20% -10%, rgba(0, 153, 255, 0.10), transparent 60%),
    radial-gradient(900px 500px at 110% 90%, rgba(180, 0, 255, 0.08), transparent 60%),
    linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02)),
    url("$IMG");
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
}

.hero--mag::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.38), rgba(0,0,0,0.55));
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 920px;
  margin: 0 auto;
  padding: clamp(24px, 6vw, 56px);
  text-align: center;
}

.hero-title {
  font-size: clamp(28px, 4.6vw, 54px);
  font-weight: 800;
  letter-spacing: 0.2px;
  margin: 0 0 6px;
  color: #fff;
  text-shadow: 0 2px 18px rgba(0,0,0,0.35);
}

.hero-tagline {
  margin: 0 0 22px;
  opacity: 0.92;
  font-size: clamp(16px, 2.2vw, 20px);
}

.hero-actions {
  display: inline-flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6px;
}

.btn {
  display: inline-block;
  text-decoration: none;
  padding: 11px 16px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease, background 120ms ease;
  will-change: transform;
}

.btn-primary {
  color: #0b0c0f;
  background: #b7ff64;
  border-color: #9de24f;
  box-shadow: 0 8px 20px rgba(183,255,100,0.25);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 26px rgba(183,255,100,0.35);
}

.btn-ghost {
  color: #e8e8ea;
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.16);
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.28);
  background: rgba(255,255,255,0.10);
}

.hero-secondary { margin-top: 12px; opacity: 0.8; }
.text-link {
  color: #d6ffd0;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.text-link:hover { color: #ffffff; }
/* ====== /HERO v2 ====== */

EOF

echo "✅ Bestanden geschreven."
echo "ℹ️  Start lokaal met: npm run dev  (open http://localhost:3000)"
echo "💾 Backups staan in: $(echo .backup_hero_*)"
