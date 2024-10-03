import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { Vehicle } from "../lib/types";
interface MapViewProps {
  vehicles: Vehicle[];
  selectedVehicle?: Vehicle;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const MapView: React.FC<MapViewProps> = ({
  vehicles,
  selectedVehicle,
  onSelectVehicle,
}) => {
  const defaultCenter: LatLngExpression = [53.5511, 9.9937]; // Hamburg's latitude and longitude

  return (
    <MapContainer
      center={defaultCenter}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker
        vehicles={vehicles}
        selectedVehicle={selectedVehicle}
        onSelectVehicle={onSelectVehicle}
      />
    </MapContainer>
  );
};

export default MapView;