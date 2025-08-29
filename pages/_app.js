import { useEffect } from 'react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Als er al een SW is, update 'm; anders registreren
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg) {
          reg.update();
        } else {
          navigator.serviceWorker.register('/sw.js');
        }
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
