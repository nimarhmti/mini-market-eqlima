import { AppBar, Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { CustomButton } from "./CustomizeButton";
import LogoSVGIcon from "../../../public/icons/logo";

export default function Navbar() {
  const theme = useTheme();
  return (
    <AppBar component="nav" color="primary" sx={{ padding: " 0.75rem 0" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomButton label="خروج" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h4" color="secondary.main" mr={2}>
            اقلیماگلد
          </Typography>
          <LogoSVGIcon
            fill={theme.palette.secondary.main}
            width="3rem"
            height="3rem"
          />
        </Box>
      </Container>
    </AppBar>
  );
}
