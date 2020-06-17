import { Action } from 'redux';
import fetch from 'cross-fetch';

import { DriversProps } from '../../features/TaxiMap/types';

export const FETCHING_TAXI_LOCATIONS_DONE = 'FETCHING_TAXI_LOCATIONS_DONE';
export const FETCHING_TAXI_LOCATIONS_ERROR = 'FETCHING_TAXI_LOCATIONS_ERROR';

interface ApiProps {
  taxiCount: number | number[];
}

export interface PayloadProps {
  driverLocations: {
      drivers: DriversProps[];
  };
}

function buildApiUrl({ taxiCount }: ApiProps): string {
  return `http://qa-interview-test.splytech.dev/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=${taxiCount}`;
}

export interface GetTaxiLocationsAction extends Action {
  type: 'FETCHING_TAXI_LOCATIONS_DONE' | 'FETCHING_TAXI_LOCATIONS_ERROR';
  payload?: PayloadProps;
}

export async function getTaxiLocations(props: ApiProps): Promise<GetTaxiLocationsAction> {
  const driverLocations = await fetch(buildApiUrl({ ...props }));
  if (driverLocations.status >= 400) {
    return {
      type: FETCHING_TAXI_LOCATIONS_ERROR,
    };
  }

  return {
    type: FETCHING_TAXI_LOCATIONS_DONE,
    payload: { driverLocations: await driverLocations.json() },
  };
}
