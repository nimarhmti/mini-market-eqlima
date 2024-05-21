import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import { CustomButton } from "./CustomizeButton";

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
          <Typography variant="h4" color="secondary.main">
            اقلیماگلد
          </Typography>
          <Typography variant="h4">لوگو</Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
