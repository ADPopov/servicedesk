import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {GlobalFonts} from "./assets/fonts/fonts";
import {GlobalStyles} from "./components/styles/Global.styles";

ReactDOM.render(
    <BrowserRouter>
        <GlobalFonts/>
        <GlobalStyles/>
        <App/>
    </BrowserRouter>, document.getElementById('root')
);