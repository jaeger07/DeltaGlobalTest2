import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }
   body, #root, html {
        margin: 0;
        padding: 0;
        background-color: var(white, #FFF);
   }
   body, input, textarea, button, a, span {
      font-family: 'poppins', sans-serif;
      font-weight: 600;
      text-decoration: none;
      border:none;
   }

   button, select, a {
      cursor: pointer;
      color: black;
   }

`;