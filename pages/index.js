import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecteer breedte
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // bij init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={styles.container}>
      <div
        style={{
          ...styles.background,
          backgroundSize: isMobile ? 'cover' : 'contain',
        }}
      />
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
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundImage: 'url("/splash/splash-iphone15-optimized.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  },
};