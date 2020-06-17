import update from 'immutability-helper';
import {
  FETCHING_TAXI_LOCATIONS_DONE,
  FETCHING_TAXI_LOCATIONS_ERROR,
  PayloadProps,
} from '../../actions/TaxiMap';

import { DriversProps } from '../../features/TaxiMap/types';

interface StateProps {
  driverLocations: DriversProps[];
  isError: boolean;
}

const initialState: StateProps = {
  driverLocations: [],
  isError: false,
};

interface ReducerProps {
  type: string;
  payload: PayloadProps;
}

export default function (state = initialState, { type, payload }: ReducerProps): StateProps {
  if (!payload) {
    return state;
  }
  const { driverLocations } = payload;
  switch (type) {
    case FETCHING_TAXI_LOCATIONS_DONE:
      return update(state, {
        driverLocations:
        {
          $set: driverLocations.drivers,
        },
        isError: { $set: false },
      });

    case FETCHING_TAXI_LOCATIONS_ERROR:
      return update(state, {
        isError: { $set: true },
        driverLocations: { $set: [] },
      });

    default:
      return state;
  }
}
