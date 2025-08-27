export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.background}></div>
    </main>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  background: {
    backgroundImage: 'url("/splash/splash-iphone15-optimized.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  },
};