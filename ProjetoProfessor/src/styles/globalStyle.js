import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5dc;
    line-height: 1.6;
    padding: 1rem;
  }

  p {
    font-size: 2rem;
    text-align: center;
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.5rem;
      margin-top: 2rem;
    }

    body {
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1.2rem;
      margin-top: 1.5rem;
    }
  }
`;

export default GlobalStyle;
