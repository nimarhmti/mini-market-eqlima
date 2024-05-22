import { CustomButton } from "@/components/shared/CustomizeButton";
import Input from "@/components/shared/InputField";
import usePost from "@/hooks/usePost";
import { formProps, valueModel } from "@/types/haomePage/interfaces";
import { Box, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
//initial values
const initialValues: valueModel = {
  errorMessage: "",
  weight: 100,
};
const url = "/order";
export const From = ({ onCloseModal, lastPrice, name }: formProps) => {
  const [inputValue, setInputValue] = useState<valueModel>(initialValues);
  const { makeRequest, data, isLoading, error } = usePost(`${url}/${name}`);

  //handler functions
  const onChangeHandler = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    console.log(value);
    const copyValue = +value;
    if (!copyValue) {
      setInputValue({
        weight: copyValue,
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
    await makeRequest({
      weight: +inputValue.weight,
      price: lastPrice,
    });
  };
  //main

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      onSubmit={handlePost}
    >
      {/* <CustomAlert isOpen={true} status="success" /> */}

      <Typography align="right">ثبت سفارش خرید / فروش</Typography>
      <label style={{ textAlign: "right" }} htmlFor="amount">
        وزن
      </label>
      <Input
        type="weight"
        id="weight"
        defaultValue={initialValues.weight}
        value={inputValue.weight}
        error={inputValue.errorMessage ? true : false}
        name="weight"
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
