import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background: no-repeat url('/images/backgroundImage.jpg');
    background-size: cover;
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
