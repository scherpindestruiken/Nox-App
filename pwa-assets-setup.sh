#!/usr/bin/env bash
set -e

echo "🔧 PWA assets klaarzetten..."

# 0) Mappen
mkdir -p public/icons

# 1) offline.html (simpel, donker, passend bij jouw stijl)
if [ ! -f public/offline.html ]; then
  cat > public/offline.html <<'EOF'
<!doctype html>
<html lang="nl">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>Offline</title>
    <style>
      html,body{height:100%;margin:0;background:#0b0c0f;color:#e8e8ea;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial}
      .wrap{min-height:100%;display:grid;place-items:center;padding:24px}
      .card{border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:18px 16px;max-width:520px;background:rgba(255,255,255,0.03)}
      a{color:#b7ff64}
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="card">
        <h1>Offline</h1>
        <p>Geen verbinding. Probeer opnieuw als je weer bereik hebt.</p>
        <p><a href="/">Terug naar start</a></p>
      </div>
    </div>
  </body>
</html>
EOF
  echo "✅ public/offline.html aangemaakt"
else
  echo "ℹ️  public/offline.html bestaat al — overslaan"
fi

# 2) manifest.json met veilige start_url
if [ ! -f public/manifest.json ]; then
  cat > public/manifest.json <<'EOF'
{
  "name": "Scherp in de Struiken",
  "short_name": "Struiken",
  "start_url": "/?source=pwa",
  "scope": "/",
  "display": "standalone",
  "background_color": "#0b0c0f",
  "theme_color": "#0b0c0f",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
EOF
  echo "✅ public/manifest.json aangemaakt"
else
  echo "ℹ️  public/manifest.json bestaat al — overslaan"
fi

# 3) Icons maken vanuit een bronplaatje
# Voorkeurbronnen in volgorde:
CANDIDATES=(
  "public/NOX_favicon.jpeg"
  "public/NOX_home.png"
  "public/NOX_home_desktop.png"
  "public/icon.png"
  "public/favicon.png"
  "public/favicon.ico"
)

SRC=""
for f in "${CANDIDATES[@]}"; do
  if [ -f "$f" ]; then SRC="$f"; break; fi
done

if [ -z "$SRC" ]; then
  # laatste redmiddel: maak een simpele 192 PNG via mac 'sips' of val terug op 1px png (lelijk, maar werkt)
  if command -v sips >/dev/null 2>&1; then
    echo "⚠️  Geen bronafbeelding gevonden. Maak placeholder iconen."
    # 1x1 wit PNG genereren via base64 en sips naar juiste grootte
    BASE64_1PX="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottQAAAABJRU5ErkJggg=="
    echo "$BASE64_1PX" | base64 --decode > public/icons/icon-192.png
    cp public/icons/icon-192.png public/icons/icon-512.png
    sips -Z 192 public/icons/icon-192.png >/dev/null
    sips -Z 512 public/icons/icon-512.png >/dev/null
    echo "✅ Placeholder iconen gemaakt met sips"
  else
    echo "⚠️  Geen bronafbeelding en geen 'sips' beschikbaar. Maak 1px placeholders."
    BASE64_1PX="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottQAAAABJRU5ErkJggg=="
    echo "$BASE64_1PX" | base64 --decode > public/icons/icon-192.png
    cp public/icons/icon-192.png public/icons/icon-512.png
    echo "✅ 1px placeholders gemaakt (vervang later door echte iconen)"
  fi
else
  echo "🔍 Bronafbeelding gevonden: $SRC"
  if command -v sips >/dev/null 2>&1; then
    sips -s format png "$SRC" --out public/icons/icon-192.png >/dev/null
    sips -Z 192 public/icons/icon-192.png >/dev/null
    sips -s format png "$SRC" --out public/icons/icon-512.png >/dev/null
    sips -Z 512 public/icons/icon-512.png >/dev/null
    echo "✅ Iconen gemaakt met sips (192 & 512)"
  else
    cp "$SRC" public/icons/icon-192.png
    cp "$SRC" public/icons/icon-512.png
    echo "ℹ️  'sips' niet gevonden — kopieën geplaatst (afmetingen mogelijk niet perfect)"
  fi
fi

echo "🎯 Klaar. PWA assets staan."
