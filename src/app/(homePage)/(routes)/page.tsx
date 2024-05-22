"use client";
import { useState } from "react";
import RateItem from "@/app/(homePage)/_components/rateItem/Card";
import DialogWrapper from "@/components/shared/dialogWrapper";
import Navbar from "@/components/shared/navbar";
import { Box, Container, Grid, Typography } from "@mui/material";
import { From } from "../_components/form/From";
import { SseServices } from "@/services/SSE";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [alert, setAlert] = useState<boolean>(false);
  const { isLoading, isError, value } = SseServices();
  const onOpenModalHandler = () => {
    setIsOpen((pre) => !pre);
  };
  // const handleCloseAlert = (
  //   event: React.SyntheticEvent | Event,
  //   reason?: string
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setAlert(false);
  // };

  if (isError)
    return <Typography variant="h1">somethings went wrong!</Typography>;
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100svh",
        bgcolor: "primary.dark",
      }}
    >
      <Navbar />
      <Container
        sx={{
          paddingTop: "6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* buy section */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <RateItem
              name="buy"
              label="خرید"
              price={value.buyPrice}
              isLoading={isLoading}
            />
          </Grid>
          {/* sell section  */}
          <Grid item xs={12} md={6}>
            <RateItem
              name="sell"
              label="فروش"
              price={value.sellPrice}
              isLoading={isLoading}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
