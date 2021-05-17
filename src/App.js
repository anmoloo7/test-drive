import React, { useEffect, Fragment } from 'react';
import Routes from './routes';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from "react-redux";

function App() {
  //dont remove it
  const store = useSelector((store) => store);

  const { addToast } = useToasts();
  if (!window.notify) {
    window.notify = {
      success: (message) => addToast(message, { appearance: 'success' }),
      error: (message) => addToast(message, { appearance: 'error' }),
      warning: (message) => addToast(message, { appearance: 'warning' }),
      info: (message) => addToast(message, { appearance: 'info' })
    };;
  }


  return (window.notify) ?
    <Fragment>
      <Routes />
    </Fragment>
    :
    <div>Loading...</div>
    ;
}

export default App;
