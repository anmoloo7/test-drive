import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-xxl/dist/css/bootstrap.min.css";
import './css/index.css';
import './css/colors.css';
import { ToastProvider } from 'react-toast-notifications';
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <ToastProvider autoDismissTimeout={10000} autoDismiss={true}>
        <App />
      </ToastProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
