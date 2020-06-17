import React from 'react';
import { shallow } from 'enzyme';

import ErrorText from '..';

describe('<ErrorText />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<ErrorText />);
    expect(wrapper).toMatchSnapshot();
  });
});
