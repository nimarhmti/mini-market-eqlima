"use client";
import React from "react";
import Modal from "@mui/material/Modal";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function DialogWrapper({ onClose, isOpen, children }: Props) {
  return (
    <div>
      {/* ------------------------mobile view------------------------- */}
      <Drawer
        anchor="bottom"
        sx={{ display: { xs: "block", md: "none" } }}
        open={true}
        onClose={() => {
          true;
        }}
      >
        {children}
      </Drawer>
      {/* ------------------------laptop view------------------------- */}
      <Modal
        open={true}
        onClose={() => {
          true;
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: { xs: "none", md: "block" } }}
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
    </div>
  );
}
