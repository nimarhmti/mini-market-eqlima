"use client";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, {
  AlertColor,
  AlertPropsColorOverrides,
} from "@mui/material/Alert";
import { Box } from "@mui/material";

const alertInfo = {
  success: "سفارش شما ثبت شد",
  error: "مشکلی رخ داده است",
};

interface Props {
  isOpen: boolean;
  status: "success" | "error";
}
export default function CustomAlert({ status, isOpen }: Props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <Snackbar
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
      >
        <Alert severity={status} variant="filled" sx={{ width: "100%" }}>
          {alertInfo[status]}
        </Alert>
      </Snackbar>
    </Box>
  );
}
