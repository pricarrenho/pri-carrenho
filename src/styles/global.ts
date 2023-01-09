import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      background: ${theme.colors.background};
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    * {
      color: ${theme.colors.red};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.sm};
    }
  `}
`;
