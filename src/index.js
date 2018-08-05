import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './week9-skillTree/reducers/';
import { HashRouter } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
