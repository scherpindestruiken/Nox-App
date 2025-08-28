// pages/_app.js
import "../styles/globals.css";

function Background() {
  const style = {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: -1,
    pointerEvents: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "none",
    backgroundColor: "#000"
  };

  return (
    <picture style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      {/* Desktop/breedbeeld bron */}
      <source
        media="(min-aspect-ratio: 4/3)"
        srcSet="/splash/splash-desktop-1920x1080.png?v=desk"
      />
      {/* Fallback = mobiel/portret */}
      <img
        src="/splash/splash-iphone15-v3.jpeg?v=mob"
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority="high"
        style={style}
      />
    </picture>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Background />
      <Component {...pageProps} />
    </>
  );
}