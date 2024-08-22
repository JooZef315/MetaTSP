import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import MapNodes from "../components/mapNodes";
import { useCoordinatesStore } from "../store/coordinatesStore";
import { LatLngBounds } from "leaflet";

export default function LiveMap() {
  const coordinates = useCoordinatesStore((state) => state.mapCoordinates);
  const removeFromMap = useCoordinatesStore((state) => state.removeFromMap);

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  return (
    <main className="h-full flex justify-center items-center">
      <MapContainer
        maxBounds={new LatLngBounds([-90, -180], [90, 180])}
        center={[30.505, 31.09]}
        zoom={8}
        minZoom={2}
        className="h-full w-full z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {coordinates.map((node, idx) => (
          <Marker
            key={idx}
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
