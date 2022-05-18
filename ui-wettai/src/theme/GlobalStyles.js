import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,  *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    }
`;
 
export default GlobalStyle;