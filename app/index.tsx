import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { IStore } from 'redux';
import routes from './routes';

let configureStore:any;

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./store/configureStore.production');
} else {
  configureStore = require('./store/configureStore.development');
}

import './app.global.css';

const store: IStore<any> = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
