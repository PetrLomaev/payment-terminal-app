import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    // background: {linear-gradient(to right, #87CEEB, pink)};
    background-image: url('/images/backgroundImage.jpg');
  }
`;