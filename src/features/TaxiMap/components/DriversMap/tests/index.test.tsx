/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';

import GoogleApiWrapper from '..';

describe('<GoogleApiWrapper />', () => {
  const defaultProps = {
    google: jest.fn(),
    driverLocations: [
      {
        location: {
          latitude: 50,
          longitude: -1,
        },
      },
      {
        location: {
          latitude: 50,
          longitude: -1,
        },
      },
    ],
  };

  it('should render loading screen', () => {
    const wrapper = shallow(<GoogleApiWrapper {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
