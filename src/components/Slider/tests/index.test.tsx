/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';

import Slider from '..';

describe('<Slider />', () => {
  const defaultProps = {
    min: 1,
    max: 50,
    defaultValue: 10,
    onValueChange: jest.fn(),
  };

  it('should render with default props', () => {
    const wrapper = shallow(<Slider {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
