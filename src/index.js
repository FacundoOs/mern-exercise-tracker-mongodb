import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

// import reportWebVitals from './reportWebVitals';

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "";
} else {
  apiUrl = "http://localhost:5000/";
}
axios.defaults.baseURL = apiUrl;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
