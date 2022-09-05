import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function navScroll(e) {

  // let scrollPos = document.body.scrollTop;

  // document.getElementsByClassName("nav").style.bottom = scrollPos
  console.log("bruh");

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  document.getElementById('root').addEventListener('scroll', navScroll)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
