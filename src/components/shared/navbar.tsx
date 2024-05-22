import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import { CustomButton } from "./CustomizeButton";
import LogoSVGIcon from "../../../public/icons/logo";

export default function Navbar() {
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
          <LogoSVGIcon fill="#F9BA48" width="3rem" height="3rem" />
        </Box>
      </Container>
    </AppBar>
  );
}
