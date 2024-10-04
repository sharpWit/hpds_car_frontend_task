import { useContext } from "react";
import { ListContext } from "../contexts/listContext";

export const useCarsContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useCarsContext must be used within a ListProvider");
  }
  return context;
};
