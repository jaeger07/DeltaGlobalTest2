import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

   body {

      background: ${props => props.theme.colors.bg};
      color: ${props => props.theme.colors.textTaskTittle}
   }

   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }
   body, #root, html {
        margin: 0;
        padding: 0;
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