export default function DebugImage(){
  const paths = ["/images/home-mobile.png","/images/home-desktop.png","/images/logo.png"];
  return (
    <main style={{padding:"16px",color:"#eee",fontFamily:"system-ui"}}>
      <h1>Debug images</h1>
      <p>Als hieronder kruisjes of status ≠ 200 verschijnen, ligt het NIET aan de CSS maar aan bestanden/paden.</p>
      {paths.map(p=>(
        <section key={p} style={{margin:"16px 0"}}>
          <h3>{p}</h3>
          <img src={p+"?v=probe"} alt={p} style={{maxWidth:"100%",border:"1px solid #444"}}
               onError={(e)=>{e.target.insertAdjacentHTML("afterend","<div style=\'color:#f66\'>Kon "+p+" niet laden</div>")}}/>
        </section>
      ))}
      <h2>Fetch status</h2>
      <pre id="log" style={{whiteSpace:"pre-wrap",background:"#111",padding:"8px"}}>Checking…</pre>
      <script dangerouslySetInnerHTML={{__html:`
        (async () => {
          const log = document.getElementById('log');
          for (const p of ${JSON.stringify(paths)}) {
            try {
              const r = await fetch(p + "?t=" + Date.now(), {cache:"no-store"});
              log.textContent += "\\n" + p + " -> " + r.status + " " + r.statusText + " (" + (r.headers.get("content-type")||"?") + ")";
            } catch(e) { log.textContent += "\\n" + p + " -> ERROR " + e.message; }
          }
        })();
      `}} />
    </main>
  );
}
