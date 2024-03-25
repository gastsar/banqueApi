import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/sass/main.scss'
import App from './App.jsx';

import { Provider } from 'react-redux';
import store from './store/store.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
          <App />
    </Provider>
  
    </BrowserRouter>
  </React.StrictMode>
);

