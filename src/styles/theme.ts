const colors = {
  white: "#fff",
  dark: "#000",
  red: "red",
};

const font = {
  family: "Roboto",
  sizes: {
    sm: "16px",
    md: "20px",
    lg: "26px",
  },
};

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.white,
    text: colors.dark,
  },
  font,
};

export const themeDark = {
  colors: {
    ...colors,
    background: colors.dark,
    text: colors.white,
  },
  font,
};
