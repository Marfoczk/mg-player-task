import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html{
        font-size: 62.5% /* from now 1rem === 10px */
    }

    body{
        font-size: 1.6rem; /* we set default font size value to the 16px as it was */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;