"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";
import path from "path";
const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Yekan Bakh EN 03 Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Yekan Bakh EN 05 Medium.woff",
      weight: "600",
      style: "normal",
    },
  ],
});

const theme = createTheme({
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: myFont.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        'input[type="number"]': {
          appearance: "textfield !important",
          MozAppearance: "textfield !important",
        },

        ' input[type=number]::-webkit-inner-spin-button ,input[type="number"]::-webkit-outer-spin-button':
          {
            WebkitAppearance: "none",
            margin: 0,
          },
      },
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
