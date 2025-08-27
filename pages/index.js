import { useEffect, useState } from 'react';

export default function Home() {
  const [splashImage, setSplashImage] = useState('/splash/splash-iphone15-optimized.png');

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width >= 3440) {
      setSplashImage('/splash/splash-desktop-3440x1440.png');
    } else if (width >= 2560) {
      setSplashImage('/splash/splash-desktop-2560x1080.png');
    } else if (width >= 1024) {
      setSplashImage('/splash/splash-desktop-1920x1080.png');
    } else {
      setSplashImage('/splash/splash-iphone15-optimized.png');
    }
  }, []);

  return (
    <main style={styles.container}>
      <div
        style={{
          ...styles.background,
          backgroundImage: `url("${splashImage}")`,
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
  },
  background: {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  },
};