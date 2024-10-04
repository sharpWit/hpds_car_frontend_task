import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import { useCarsContext } from "../hooks/useCarsList";
import { Vehicle } from "../lib/types";

const LocationMarker = () => {
  const map = useMap();
  const { cars, selectedCar, handleSelectCar } = useCarsContext();

  const handleMarkerClick = (vehicle: Vehicle) => {
    handleSelectCar(vehicle);
    const coordinatesArray: [number, number] = [
      vehicle.geoCoordinate.latitude,
      vehicle.geoCoordinate.longitude,
    ];
    map.flyTo(coordinatesArray, 15);
  };

  useEffect(() => {
    if (selectedCar) {
      map.flyTo(
        [
          selectedCar.geoCoordinate.latitude,
          selectedCar.geoCoordinate.longitude,
        ],
        15
      );
    }
  }, [selectedCar, map]);

  return (
    <>
      {cars.map((vehicle) => (
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
