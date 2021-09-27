import {createGlobalStyle} from "styled-components";
// @ts-ignore
export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    font-family: 'Gilroy';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #D2D2D2;
  }

  :root {
    --select-border: #777;
    --select-focus: blue;
    --select-arrow: var(--select-border);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    // Stack above custom arrow
    z-index: 1;

    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
      display: none;
    }

    // Remove focus outline, will add on alternate element
    outline: none;
  }
`