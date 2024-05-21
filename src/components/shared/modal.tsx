import { Box, Modal } from "@mui/material";
import React from "react";
import { modalPropsType } from "../types/interfaces";

export default function CustomModal({
  isOpen,
  onOpenHandler,
  children,
}: modalPropsType) {
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
          bgcolor: "primary.light",
          p: 2,
          borderRadius: "1rem",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}
