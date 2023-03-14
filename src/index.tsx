import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import {Provider} from 'react-redux';
import App from './components/app/app';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

const promise = new Promise(() => {
  store.dispatch({type: 'REFRESH_TASKS', payload: null})
});

promise
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
    );
  });
