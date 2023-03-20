import { themeBlack } from "./src/styles/theme";

type Theme = typeof themeBlack;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
