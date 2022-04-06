import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
=======
import App from './App';
import {BrowserRouter} from "react-router-dom";
>>>>>>> Sushant


ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <App />
    </Provider>
=======
    <BrowserRouter>    
        <App />
    </BrowserRouter>
>>>>>>> Sushant
  </React.StrictMode>,
  document.getElementById('root')
);

