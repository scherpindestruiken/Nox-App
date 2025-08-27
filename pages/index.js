export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.background}></div>
    </main>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  background: {
    backgroundImage: 'url("/splash/splash-iphone15-optimized.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  text: {
    position: 'relative',
    zIndex: 1,
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
    top: '60%',
  },
};