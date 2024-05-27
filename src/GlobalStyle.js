import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none !important;
    max-height: 100vh;
  }

  ::-webkit-scrollbar-track {
    background-color: #181818;
  }
  
  ::-webkit-scrollbar {
    width: 16px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #139DEB;
    border: 4px solid #181818;
    border-radius: 8px;
  }
`