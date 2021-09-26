import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {GlobalFonts} from "./assets/fonts/fonts";
import {GlobalStyles} from "./components/common/styles/Global.styled";

ReactDOM.render(
    <div>
        <GlobalFonts/>
        <GlobalStyles/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>
    , document.getElementById('root')
);