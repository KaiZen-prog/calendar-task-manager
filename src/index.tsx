import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {ActionType} from './store/actions/actions';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

//Умело изображаем запрос на сервер
const promise = new Promise(() => {
  store.dispatch({type: ActionType.SET_TASKS})
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
