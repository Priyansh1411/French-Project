// pages/_app.js
import "../styles/globals.css"; // Import your global styles
import "leaflet/dist/leaflet.css"; // Import Leaflet styles for the map

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;