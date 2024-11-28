import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define the custom marker icon
const customIcon = new L.Icon({
  iconUrl: "/images/custom-marker.png", // Path to the custom marker image
  iconSize: [40, 60], // Adjust size of the marker
  iconAnchor: [20, 60], // Anchor the marker to the bottom-center
});

const locations = [
  { lat: 49.1532, lng: 5.4237, title: "Bataille de Verdun (1916)" },
  { lat: 49.4144, lng: -0.5764, title: "Jour J: Normandie (1944)" },
  { lat: 48.8566, lng: 2.3522, title: "Libération de Paris (1944)" },
];

const MapComponent = () => {
  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={5}
      style={{ height: "400px", width: "100%", borderRadius: "10px" }}
      className="shadow-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.lng]}
          icon={customIcon} // Use the custom icon
        >
          <Popup>{location.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;