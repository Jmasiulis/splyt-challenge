import React from 'react';
import { shallow } from 'enzyme';

import WelcomeText from '..';

describe('<WelcomeText />', () => {
  it('should render', () => {
    const wrapper = shallow(<WelcomeText />);
    expect(wrapper).toMatchSnapshot();
  });
});
