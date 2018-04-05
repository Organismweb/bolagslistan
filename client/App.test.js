import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';

test('app component renders without exploding', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
