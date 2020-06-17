interface LocationProps {
  latitude: number;
  longitude: number;
  bearing: number;
}

export interface DriversProps {
  driver_id: string;
  location: LocationProps;
}
