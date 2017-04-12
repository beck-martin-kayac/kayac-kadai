import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom'
var ReactDOM =  require('react-dom'); //import { ReactDOM } from 'react-dom';でうまくインポートできなかった？！
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';
    

const rootEl = document.getElementById('root');
let store = createStore(counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)


