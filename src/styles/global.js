import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    font-family:Montserrat;
    min-height: 100vh;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none !important;
    color: black !important;
  }

  .head-h1{
    margin-bottom: 30px;
    text-align: center;
    font-size: 100px;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
  
  @media screen and (max-width:600px){
    .head-h1 {
      font-size: 70px;
    }
  }

  .line{
    padding:1.5px 0;
    width: 100%;
    background-color: black;
    margin-bottom: 50px;
  }

`;

export default GlobalStyle;
