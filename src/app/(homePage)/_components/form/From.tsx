import { CustomButton } from "@/components/shared/CustomizeButton";
import Input from "@/components/shared/InputField";
import { Box, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
//interfaces and types
interface Props {
  onCloseModal: () => void;
}
interface valueModel {
  amount: number;
  errorMessage: string;
}
//initial values
const initialValues: valueModel = {
  errorMessage: "",
  amount: 100,
};
export const From = ({ onCloseModal }: Props) => {
  const [inputValue, setInputValue] = useState<valueModel>(initialValues);
  //conditions

  //handler functions
  const onChangeHandler = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    const copyValue = +value;
    if (!copyValue) {
      setInputValue({
        amount: copyValue,
        errorMessage: "لطفا فیلد را پر کنید! ",
      });
    } else if (copyValue < 0) {
      setInputValue((pre) => ({
        ...pre,
        errorMessage: "اعداد منفی مجاز نیست!",
        [name]: value,
      }));
    } else {
      setInputValue((pre) => ({
        ...pre,
        [name]: value,
        errorMessage: initialValues.errorMessage,
      }));
    }
  };
  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  //main

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      onSubmit={handlePost}
    >
      <Typography align="right">ثبت سفارش خرید / فروش</Typography>
      <label style={{ textAlign: "right" }} htmlFor="amount">
        وزن
      </label>
      <Input
        type="number"
        id="amount"
        value={inputValue.amount}
        error={inputValue.errorMessage ? true : false}
        name="amount"
        onChange={onChangeHandler}
        InputLabelProps={{ shrink: true }}
        helperText={inputValue.errorMessage}
        FormHelperTextProps={{ style: { textAlign: "right" } }}
        InputProps={{
          startAdornment: <InputAdornment position="start">گرم</InputAdornment>,
          style: { textAlign: "right" },
        }}
      />
      <Box aria-label="Basic button group">
        <CustomButton
          label="فروش"
          type="submit"
          disabled={inputValue.errorMessage ? true : false}
        />
        <CustomButton
          label="بستن"
          sx={{ marginLeft: "0.5rem" }}
          onClick={onCloseModal}
        />
      </Box>
    </form>
  );
};
