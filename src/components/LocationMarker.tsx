import { FC, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import { Vehicle } from "../lib/types";

interface Props {
  vehicles: Vehicle[];
  selectedVehicle?: Vehicle;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const LocationMarker: FC<Props> = ({
  vehicles,
  // selectedVehicle,
  onSelectVehicle,
}) => {
  // console.log("PROPS: ", {
  //   vehicles,
  //   selectedVehicle,
  //   onSelectVehicle,
  // });

  const map = useMap();
  const [position, setPosition] = useState<[number, number] | null>(null);

  const handleMarkerClick = (vehicle: Vehicle) => {
    onSelectVehicle(vehicle);
    const coordinatesArray: [number, number] = [
      vehicle.geoCoordinate.latitude,
      vehicle.geoCoordinate.longitude,
    ];
    setPosition(coordinatesArray);
    map.flyTo(coordinatesArray, 15);
  };

  console.log("position: ", position);
  return (
    <>
      {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.vin}
          position={[
            vehicle.geoCoordinate.latitude,
            vehicle.geoCoordinate.longitude,
          ]}
          eventHandlers={{
            click: () => handleMarkerClick(vehicle),
          }}
        />
      ))}
    </>
  );
};

export default LocationMarker;
