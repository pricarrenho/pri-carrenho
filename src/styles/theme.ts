const colors = {
  black: "#000000",
  white: "#ffffff",
  pink: {
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },
  neutral: {
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#13131a",
  },
};

const font = {
  sizes: {
    ssm: "1rem",
    sm: "1.4rem",
    mmd: "1.6rem",
    md: "1.8rem",
    lg: "2.4rem",
    xl: "3.2rem",
    xxl: "6.4rem",
  },
};

export const themeBlack = {
  colors: {
    ...colors,
    background: colors.neutral[900],
  },
  font,
};
