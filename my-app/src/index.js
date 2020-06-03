import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as serviceWorker from './serviceWorker';


let config = {
  apiKey: "AIzaSyBo_JJSCm3s7IVHAoMuh5WnjuEhny4HqZY",
  authDomain: "info442-s20-dailygrind.firebaseapp.com",
  databaseURL: "https://info442-s20-dailygrind.firebaseio.com",
  projectId: "info442-s20-dailygrind",
  storageBucket: "info442-s20-dailygrind.appspot.com",
  messagingSenderId: "550288362845",
  appId: "1:550288362845:web:ee14e06dccc6b03d526cb4",
  measurementId: "G-G09PD0YC5K"
}

firebase.initializeApp(config);

ReactDOM.render(
  <HashRouter><App /></HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
