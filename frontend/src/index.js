import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EwalletApp from "./components/EwalletApp";
import {Provider} from "react-redux";
import store from "./redux/store";
import 'fontsource-roboto';

ReactDOM.render(
    <Provider store={store}>
        <EwalletApp/>,
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
