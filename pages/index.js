export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Welkom bij Nox 🦝</h1>
      <p style={styles.subtitle}>
        Scherp in de Struiken – een ondeugende blik op de natuur.
      </p>
    </main>
  );
}

const styles = {
  main: {
    backgroundColor: '#000000',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
};