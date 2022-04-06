import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
// import { store } from './app/store';
=======
import { store } from './app/store';
>>>>>>> Ambesh
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> Ambesh
  </React.StrictMode>,
  document.getElementById('root')
);

