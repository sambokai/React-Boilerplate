import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';


it('should render correctly', () => {
  const wrapper = shallow(<Hello />);

  expect(wrapper).toMatchSnapshot();
});
