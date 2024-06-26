import { FormControl, TextField } from "@mui/material";
import React, { forwardRef } from "react";
import type { TextFieldProps } from "@mui/material";
const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...rest }, ref) => (
    <FormControl fullWidth>
      <TextField
        variant="outlined"
        size="small"
        inputRef={ref}
        inputProps={{ style: { fontSize: 16 } }}
        InputLabelProps={{ style: { fontSize: 16 } }}
        {...rest}
      />
    </FormControl>
  )
);
Input.displayName = "Input";
export default Input;
