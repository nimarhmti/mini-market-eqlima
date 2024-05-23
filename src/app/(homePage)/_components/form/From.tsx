import { CustomButton } from "@/components/shared/CustomizeButton";
import Input from "@/components/shared/InputField";
import { RegisterApi } from "@/services";
import { formProps, valueModel } from "@/types/haomePage/interfaces";
import { Box, InputAdornment, Typography, useTheme } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
//initial values
const initialValues: valueModel = {
  errorMessage: "",
  weight: 100,
};
export const From = ({ onCloseModal, lastPrice, name }: formProps) => {
  const [inputValue, setInputValue] = useState<valueModel>(initialValues);
  const mutationApi = RegisterApi[name];
  const { mutate } = mutationApi();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  //handler functions
  const onChangeHandler = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
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
    mutate(
      {
        weight: +inputValue.weight,
        price: lastPrice,
      },
      {
        onSuccess() {
          enqueueSnackbar("باموفقیت ثبت شد", {
            autoHideDuration: 3000,
            variant: "success",
          });
          onCloseModal();
        },
        onError() {
          enqueueSnackbar("مشکلی رخ داده دوباره امتحان کنید", {
            autoHideDuration: 3000,
            variant: "error",
          });
        },
      }
    );
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
        type="weight"
        id="weight"
        color="secondary"
        defaultValue={initialValues.weight}
        value={inputValue.weight}
        error={inputValue.errorMessage ? true : false}
        name="weight"
        onChange={onChangeHandler}
        InputLabelProps={{ shrink: true }}
        helperText={inputValue.errorMessage}
        FormHelperTextProps={{ style: { textAlign: "right" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography color="secondary.main">گرم</Typography>
            </InputAdornment>
          ),
          style: {
            textAlign: "right",
            color: theme.palette.secondary.main,
          },
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
