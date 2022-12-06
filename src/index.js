import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList';
import 'tachyons';
import { robots } from './robots';
// import registerServiceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={robots}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// registerServiceWorker();
