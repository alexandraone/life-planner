import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

h1 {
    padding: 0;
    margin: 0;
}

body {
  padding: 0;
  margin: 0;
}

`;

export default GlobalStyle;
