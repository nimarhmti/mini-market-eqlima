import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
export default function SkeletonCard() {
  const theme = useTheme();
  return (
    <Stack
      spacing={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        border: "1px solid " + theme.palette.secondary.main,
        p: 2,
      }}
    >
      <Skeleton
        variant="rectangular"
        width={210}
        height={60}
        sx={{ bgcolor: "primary.main" }}
      />

      <Skeleton
        variant="rounded"
        width={210}
        height={60}
        sx={{ bgcolor: "primary.main" }}
      />
      <Skeleton
        variant="rounded"
        width={210}
        height={60}
        sx={{ bgcolor: "primary.main" }}
      />
    </Stack>
  );
}
