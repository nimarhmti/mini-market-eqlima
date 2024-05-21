import { CustomButton } from "@/components/ui/CustomizeButton";
import Input from "@/components/ui/InputField";
import { Box, FormControl, InputAdornment, Typography } from "@mui/material";
import React, { useRef } from "react";
interface Props {
  onCloseModal: () => void;
}
export const From = ({ onCloseModal }: Props) => {
  const ref = useRef<HTMLFormElement>(null);
  const handlePostAction = async (formData: FormData) => {
    const formDataCopy = formData;
    ref.current?.reset();
    const text = formData.get("amount");
    console.log(text);
    // if (!text.trim()) throw new Error("you must provide a post");
    // try {
    //   // createPostAVtion()
    // } catch (error) {
    //   console.log("error message", error);
    // }
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      action={handlePostAction}
      ref={ref}
    >
      <Typography align="right">ثبت سفارش خرید / فروش</Typography>
      <label style={{ textAlign: "right" }}>وزن</label>
      <Input
        type="number"
        defaultValue={100}
        id="amount"
        name="amount"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: <InputAdornment position="start">گرم</InputAdornment>,
        }}
      />
      <Box aria-label="Basic button group">
        <CustomButton label="فروش" type="submit" />
        <CustomButton
          label="بستن"
          sx={{ marginLeft: "0.5rem" }}
          onClick={onCloseModal}
        />
      </Box>
    </form>
  );
};
