import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './scss/app.scss';
import WidgetWeather from './WidgetWeather';
import * as serviceWorker from './serviceWorker';
import store from './store/store';


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
