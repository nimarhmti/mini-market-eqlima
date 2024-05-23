import { Card, CardContent, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { CustomButton } from "../../../../components/shared/CustomizeButton";
import SkeletonCard from "./SkeltoneCard";
import DialogWrapper from "@/components/shared/dialogWrapper";
import { From } from "../form/From";
import { cardProps } from "@/types/haomePage/interfaces";

export default function RateItem({ label, price, isLoading, name }: cardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme();
  if (isLoading) return <SkeletonCard />;
  const toggleModalHandler = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <Card
      sx={{
        padding: "2rem",
        border: "solid 1px " + theme.palette.secondary.main,
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
        <CustomButton label={label} onClick={toggleModalHandler} />
      </CardContent>
      <DialogWrapper isOpen={isOpen} onOpenHandler={toggleModalHandler}>
        <From onCloseModal={toggleModalHandler} lastPrice={price} name={name} />
      </DialogWrapper>
    </Card>
  );
}
