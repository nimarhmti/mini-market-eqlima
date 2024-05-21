"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
interface Props extends ButtonProps {
  label: string;
}
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
  },
}));
export const CustomButton: React.FC<Props> = ({ label, ...props }) => {
  return (
    <ColorButton variant="contained" {...props}>
      {label}
    </ColorButton>
  );
};
