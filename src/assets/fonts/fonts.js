import {createGlobalStyle} from 'styled-components';

import GilroyWoff from './Gilroy-Medium.woff';
import GilroyWoff2 from './Gilroy-Medium.woff2';

import GilroySemiboldWoff from './Gilroy-Semibold.woff';
import GilroySemiboldWoff2 from './Gilroy-Medium.woff2'



export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'), local('Gilroy'),
    url(${GilroyWoff2}) format('woff2'),
    url(${GilroyWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'), local('Gilroy'),
    url(${GilroySemiboldWoff}) format('woff2'),
    url(${GilroySemiboldWoff2}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
`;