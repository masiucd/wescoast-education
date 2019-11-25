import { createGlobalStyle  } from 'styled-components';



export const GlobalStyles =  createGlobalStyle`
  *::before,*::after,*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    color: pink;
    background:${props => props.theme.colors.bgShadow};
  }
`