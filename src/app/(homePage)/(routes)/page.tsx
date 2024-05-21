"use client";
import { useState } from "react";
import RateItem from "@/components/ui/Card";
import DialogWrapper from "@/app/(homePage)/_components/dialogWrapper";
import Navbar from "@/components/ui/navbar";
import { Box, Container, Grid } from "@mui/material";
export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //open and close handler function
  const onOpenModalHandler = () => {
    setIsOpen((pre) => !pre);
  };

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
          paddingTop: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <RateItem
              label="خرید"
              price="200000"
              onClickHandler={onOpenModalHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RateItem
              label="خرید"
              price="200000"
              onClickHandler={onOpenModalHandler}
            />
          </Grid>
        </Grid>
        <DialogWrapper isOpen={isOpen} onOpenHandler={onOpenModalHandler}>
          <Box>teset</Box>
        </DialogWrapper>
      </Container>
    </Box>
  );
}
