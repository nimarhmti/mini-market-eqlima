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
  const { isLoading, isError, value } = SseServices();
  const onOpenModalHandler = () => {
    setIsOpen((pre) => !pre);
  };
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
              label="خرید"
              price={value.buyPrice}
              onClickHandler={onOpenModalHandler}
              isLoading={isLoading}
            />
          </Grid>
          {/* sell section  */}
          <Grid item xs={12} md={6}>
            <RateItem
              label="فروش"
              price={value.sellPrice}
              onClickHandler={onOpenModalHandler}
              isLoading={isLoading}
            />
          </Grid>
        </Grid>
        <DialogWrapper isOpen={isOpen} onOpenHandler={onOpenModalHandler}>
          <From onCloseModal={onOpenModalHandler} />
        </DialogWrapper>
      </Container>
    </Box>
  );
}
