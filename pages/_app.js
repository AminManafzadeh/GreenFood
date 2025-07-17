import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
