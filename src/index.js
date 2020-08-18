import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './index.css';
import WidgetWeather from './WidgetWeather';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import mainStore from './store/mainStore';
import optionalStore from './store/optionalStore';

const stores = {
  store,
  mainStore,
  optionalStore,
  ButtonStore : mainStore.ButtonStore,
  InputStore : mainStore.InputStore,
  TableStore : mainStore.TableStore,
  TabsStore : mainStore.TabsStore,
};

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <WidgetWeather />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
