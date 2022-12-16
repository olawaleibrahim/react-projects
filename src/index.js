import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import App from './containers/App';
import 'tachyons';

const rootReducer = combineReducers({
  searchRobots, requestRobots
});
const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
