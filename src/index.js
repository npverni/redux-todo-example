import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');
ReactDOM.render(
  // In React 0.13 the child must be wrapped in a function
  // i.e.: {() => <App />}
  <Provider store={store}>
  	<App />
  </Provider>,
  rootElement
);
