import Head from "next/head";
export default function Home(){
  return (
    <>
      <Head><title>Scherp in de Struiken</title></Head>
      <section className="hero" aria-label="Splash">
        <img
          src="/images/home-desktop.png?v=desk-test"
          alt="Scherp in de Struiken"
          className="hero-bg"
          onError={(e)=>{e.currentTarget.replaceWith(Object.assign(document.createElement('div'),{style:"color:#fff;padding:24px",innerText:"/images/home-desktop.png kon niet laden"}));}}
        />
      </section>
      <main className="container">
        <p>Als je hier géén afbeelding ziet, ligt het niet aan CSS maar aan het bestand of pad.</p>
        <p>Open ook <a href="/debug-image">/debug-image</a> voor statuscodes.</p>
      </main>
    </>
  );
}
