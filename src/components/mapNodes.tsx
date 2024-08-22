import { useMapEvents } from "react-leaflet";
import { useCoordinatesStore } from "../store/coordinatesStore";

export default function MapNodes() {
  const placeOnMap = useCoordinatesStore((state) => state.placeOnMap);

  useMapEvents({
    click: (e) => {
      placeOnMap([e.latlng.lat, e.latlng.lng]);
    },
  });

  return null;
}
