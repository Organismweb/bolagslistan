import React from 'react';
import App from './App';

test('app component renders without exploding', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
