import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import "./main.css";
import store from "./redux/store";

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://backend-countriespi-production.up.railway.app/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}> 
    <BrowserRouter> 
        <App />
    </BrowserRouter>
</Provider>
);

//envolvemos la app y le pasamos a Provider el store de Redux
//envolvemos la app en BrowserRouter para poder hacer el enrutado