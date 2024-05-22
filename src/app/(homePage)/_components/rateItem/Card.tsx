import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { CustomButton } from "../../../../components/shared/CustomizeButton";
import Skeleton from "@mui/material/Skeleton";
import SkeletonCard from "./SkeltoneCard";
// import  from "./CustomizeButton";
interface Props {
  label: string;
  price: number | null;
  onClickHandler: () => void;
  isLoading?: boolean;
}
export default function RateItem({
  label,
  price,
  onClickHandler,
  isLoading,
}: Props) {
  if (isLoading) return <SkeletonCard />;

  return (
    <Card
      sx={{
        padding: "2rem",
        border: "solid 1px #F9BA48",
        bgcolor: "primary.main",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          direction: "rtl",
        }}
      >
        <Typography variant="h4" color="secondary.main">
          قیمت {label}
        </Typography>
        <Typography variant="body1" color="secondary.main">
          {price} <Typography variant="caption">ریال</Typography>
        </Typography>
        <CustomButton label={label} onClick={onClickHandler} />
      </CardContent>
    </Card>
  );
}
