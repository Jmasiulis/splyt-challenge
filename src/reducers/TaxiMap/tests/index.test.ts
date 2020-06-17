/* eslint-disable @typescript-eslint/camelcase */
import reducer from '..';
import * as actions from '../../../actions/TaxiMap';

function getInitialState() {
  return {
    driverLocations: [],
    isError: false,
  };
}

const payload = {
  driverLocations: {
    drivers: [
      {
        driver_id: '1',
        location:
        {
          latitude: 50,
          longitude: -1,
          bearing: 222,
        },
      },
      {
        driver_id: '2',
        location: {
          latitude: 55,
          longitude: -1,
          bearing: 22,
        },
      },
    ],
  },
};

describe('taxi map reducer', () => {
  it('should handle FETCHING_TAXI_LOCATIONS_DONE and set driver data for map', () => {
    const result = reducer(getInitialState(), {
      type: actions.FETCHING_TAXI_LOCATIONS_DONE,
      payload,
    });
    expect(Object.keys(result.driverLocations)).toHaveLength(2);
    expect(result.isError).toEqual(false);
  });

  it('should handle FETCHING_TAXI_LOCATIONS_ERROR when error occurs', () => {
    const result = reducer(getInitialState(), {
      type: actions.FETCHING_TAXI_LOCATIONS_ERROR,
      payload,
    });
    expect(Object.keys(result.driverLocations)).toHaveLength(0);
    expect(result.isError).toEqual(true);
  });
});
