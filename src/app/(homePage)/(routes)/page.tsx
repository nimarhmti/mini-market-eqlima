import RateItem from "@/components/ui/Card";
import DialogWrapper from "@/app/(homePage)/_components/diologWrapper";
import Navbar from "@/components/ui/navbar";
import { Box, Container, Grid } from "@mui/material";
export default function Home() {
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
            <RateItem label="خرید" price="200000" />
          </Grid>
          <Grid item xs={12} md={6}>
            <RateItem label="خرید" price="200000" />
          </Grid>
        </Grid>
        <DialogWrapper></DialogWrapper>
      </Container>
    </Box>
  );
}
