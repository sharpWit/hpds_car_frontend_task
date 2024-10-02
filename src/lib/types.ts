export interface GeoCoordinate {
  latitude: number;
  longitude: number;
}

export interface Vehicle {
  vin: string;
  plate: string;
  geoCoordinate: GeoCoordinate;
  fuelLevel: number;
  address: string;
  locationAlias: string;
  locationId: number;
  parkingId?: string;
  buildSeries: string;
  fuelType: string;
  primaryColor: string;
  secondaryColor?: string;
  charging: boolean;
  freeForRental: boolean;
  hardwareVersion: string;
  globalVersion: number;
}
