import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }
   body, #root, html {
        margin: 0 auto;
        background-color: #F5F5F5;
   }
   body{
      padding: 0 4%;
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