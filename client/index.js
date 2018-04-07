import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif'],
  },
});

const renderApp = Component => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
