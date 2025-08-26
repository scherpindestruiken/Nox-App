// pages/_error.js
function Error({ statusCode }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oeps!</h1>
      <p>Er ging iets mis. ({statusCode})</p>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error