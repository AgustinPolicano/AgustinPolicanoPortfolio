import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/fonts/coolvetica.ttf";
import "./assets/fonts/Forturn.otf";
import "./assets/fonts/montserrat.regular.ttf";
import "./assets/fonts/keep-calm.regular.ttf";
import "./assets/fonts/neon-club-music.medium.otf";
import "./assets/fonts/alba.regular.ttf";
import "./assets/fonts/roboto.light.ttf"
import "./assets/fonts/hemi-head-426.bold-italic.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
