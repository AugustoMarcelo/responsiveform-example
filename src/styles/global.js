import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #7159c1;
  }

  button {
    cursor: pointer;
  }

  .App {
    max-width: 800px;
    width: 100%;
    margin: 100px auto;

    @media (max-width: 340px) {
      margin: 10px auto;
      max-width: 300px;
    }

    @media (min-width: 341px) and (max-width: 767px) {
      margin: 10px auto;
      max-width: 330px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin: 10px auto;
      max-width: 600px;
    }
  }

  /** Resetando estilização do React Select */
  .react-select__control, .react-select__value-container {
    height: 40px;
  }

  .react-select__single-value {
    position: unset !important;
  }
`;