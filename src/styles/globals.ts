import { createGlobalStyle, css } from "styled-components";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body,
    h1,
    h2,
    h3,
    p {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body,
    input,
    textarea,
    button {
      font-family: ${poppins.style.fontFamily}, sans-serif;
      font-weight: 400;
    }

    html,
    body,
    #__next {
      background: ${theme.colors.background};
    }

    a {
      text-decoration: none;
    }

    li {
      list-style: none;
    }

    button {
      cursor: pointer;
    }
  `}
`;
