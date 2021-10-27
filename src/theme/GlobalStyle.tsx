import { createGlobalStyle } from 'styled-components';
import { COLORS } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${COLORS.BLUE_PRIMARY};
    width: 100%;
    height: 100%;
  }

  body, a, input, textarea, button {
    font-family: 'Space Mono', sans-serif;
    font-size: 1.6rem;
    color: ${COLORS.WHITE};
  }
`;

export { GlobalStyle };
