import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapNodes from "../components/mapNodes";
import { useCoordinatesStore } from "../store/coordinatesStore";
import L, { LatLngBounds } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41], // The iconAnchor positions the marker correctly
});

export default function LiveMap() {
  const coordinates = useCoordinatesStore((state) => state.mapCoordinates);
  const removeFromMap = useCoordinatesStore((state) => state.removeFromMap);

  return (
    <main className="h-full flex justify-center items-center">
      <MapContainer
        maxBounds={new LatLngBounds([-90, -180], [90, 180])}
        center={[30.505, 31.09]}
        zoom={4}
        minZoom={2}
        className="h-full w-full z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {coordinates.map((node, idx) => (
          <Marker
            key={idx}
            icon={defaultIcon}
            position={node}
            eventHandlers={{
              click: () => removeFromMap(node),
            }}
            title={`Node: ${idx + 1}`}
          ></Marker>
        ))}
        <MapNodes />
      </MapContainer>
    </main>
  );
}
