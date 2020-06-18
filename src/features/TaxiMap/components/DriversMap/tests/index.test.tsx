/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';

import { DriversMap } from '..';

describe('<DriversMap />', () => {
  const defaultProps = {
    google: jest.fn(),
    driverLocations: [
      {
        driver_id: '1',
        location: {
          latitude: 50,
          longitude: -1,
        },
      },
      {
        driver_id: '2',
        location: {
          latitude: 50,
          longitude: -1,
        },
      },
    ],
  };

  it('should render map with markers', () => {
    const wrapper = shallow(<DriversMap {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
