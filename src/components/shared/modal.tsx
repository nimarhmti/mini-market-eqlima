import { Box, Modal, useTheme } from "@mui/material";
import React from "react";
import { modalPropsType } from "../../types/sharedcomponents/interfaces";

export default function CustomModal({
  isOpen,
  onOpenHandler,
  children,
}: modalPropsType) {
  const theme = useTheme();
  return (
    <Modal
      open={isOpen}
      onClose={onOpenHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "fit-content",
          boxShadow: 24,
          outline: "none",
          bgcolor: "primary.dark",
          p: 2,
          border: "1px solid " + theme.palette.secondary.main,
          borderRadius: "1rem",
          color: "secondary.main",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}
