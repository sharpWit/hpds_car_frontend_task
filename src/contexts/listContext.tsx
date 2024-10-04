import { createContext, ReactNode, useEffect, useState } from "react";
import carsList from "../lib/vehicles.json";
import { Vehicle } from "../lib/types";

interface IListContext {
  cars: Vehicle[];
  selectedCar?: Vehicle;
  handleSelectCar: (car: Vehicle) => void;
  isLoading: boolean;
}

export const ListContext = createContext<IListContext | undefined>(undefined);

interface ListProviderProps {
  children: ReactNode;
}
export const CarsProvider = ({ children }: ListProviderProps) => {
  const [cars, setCars] = useState<Vehicle[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCar, setSelectedCar] = useState<Vehicle | undefined>(
    undefined
  );

  const handleSelectCar = (car: Vehicle) => {
    setSelectedCar(car);
  };

  useEffect(() => {
    const fetchCarsList = async () => {
      try {
        setTimeout(() => {
          setCars(carsList);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch cars! ", error);
      }
    };
    fetchCarsList();
  }, []);

  return (
    <ListContext.Provider
      value={{ cars, selectedCar, handleSelectCar, isLoading }}
    >
      {children}
    </ListContext.Provider>
  );
};
