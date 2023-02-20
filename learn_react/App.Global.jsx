import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`
