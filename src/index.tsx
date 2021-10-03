import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {GlobalFonts} from "./assets/fonts/fonts";
import {GlobalStyles} from "./components/common/styles/Global.styled";
import {Provider} from "react-redux";
import {store} from './store';


ReactDOM.render(
    <Provider store={store}>
        <GlobalFonts/>
        <GlobalStyles/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

