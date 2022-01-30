import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
      outline: 0;
  }

  html,body{
      width: 100%;
      height: 100%;
      background: #FAFAFA;
  }


  body,input,button{
      font-size: 100%;
      font-family: 'Poppins', sans-serif;
  }
`;
export default GlobalStyle;
