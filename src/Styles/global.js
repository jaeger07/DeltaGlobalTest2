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
      font-family: 'Inter', sans-serif;
      text-decoration: none;
      border:none;
      outline: none;
   }

   button, select, a {
      cursor: pointer;
      color: black;
   }

`;