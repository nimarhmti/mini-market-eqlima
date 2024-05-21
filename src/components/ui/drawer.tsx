import React from "react";
import { drawerPropsType } from "../types/interfaces";
import { SwipeableDrawer, styled } from "@mui/material";

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
}));

export const Drawer = ({
  container,
  drawerBleeding,
  isOpen,
  onOpenHandler,
  children,
}: drawerPropsType) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      sx={{
        display: { xs: "block", md: "none" },
      }}
      container={container}
      open={isOpen}
      onOpen={onOpenHandler}
      onClose={onOpenHandler}
      disableSwipeToOpen={false}
      swipeAreaWidth={drawerBleeding}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <StyledBox
        sx={{
          position: "absolute",
          top: -drawerBleeding,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          p: 4,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {children}
      </StyledBox>
    </SwipeableDrawer>
  );
};
