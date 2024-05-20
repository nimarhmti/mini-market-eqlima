"use client";
import { Noto_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const NotoSans = Noto_Sans({
  weight: ["400"],
  subsets: ["cyrillic", "greek", "vietnamese"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#070D14",
      dark: "#1D2329",
    },
    secondary: {
      main: "#F9BA48",
    },
  },
});

export default theme;
