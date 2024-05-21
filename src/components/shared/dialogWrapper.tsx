"use client";
import React from "react";
import Modal from "@mui/material/Modal";
import { Box, CssBaseline, SwipeableDrawer, styled } from "@mui/material";
import { Global } from "@emotion/react";
import CustomModal from "@/components/shared/modal";
import { Drawer } from "@/components/shared/drawer";

interface Props {
  isOpen: boolean;
  onOpenHandler: () => void;
  children?: React.ReactNode;
  window?: () => Window;
}
const drawerBleeding = 56;

export default function DialogWrapper({
  onOpenHandler,
  isOpen,
  children,
  window,
}: Props) {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box bgcolor="primary.light">
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      {/* ------------------------mobile view------------------------- */}
      <Drawer
        container={container}
        isOpen={isOpen}
        drawerBleeding={drawerBleeding}
        onOpenHandler={onOpenHandler}
      >
        {children}
      </Drawer>
      {/* ------------------------laptop view------------------------- */}
      <CustomModal isOpen={isOpen} onOpenHandler={onOpenHandler}>
        {children}
      </CustomModal>
    </Box>
  );
}
