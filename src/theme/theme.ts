"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, //mobile
      sm: 600, //tablet
      md: 900, //laptop
      lg: 1200, //desktop
      xl: 1536, //and more
    },
  },
  palette: {
    primary: {
      light: "#e9ecef",
      main: "#070D14",
      dark: "#1D2329",
    },
    secondary: {
      main: "#F9BA48",
    },
  },
});

export default theme;
