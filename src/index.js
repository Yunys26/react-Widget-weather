import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Libs
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
// Style
import './scss/app.scss';
// Store
import store from './store/store';

import WidgetWeather from './WidgetWeather';

const stores = {
  store,
};

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider {...stores}>
        <WidgetWeather />
      </Provider>
    </BrowserRouter>
  </StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
