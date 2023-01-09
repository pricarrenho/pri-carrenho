import { themeDark, themeWhite } from "./src/styles/theme";

type Theme = typeof themeDark;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
