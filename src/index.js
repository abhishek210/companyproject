import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import mystore from './Redux/store'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={mystore}>

        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);