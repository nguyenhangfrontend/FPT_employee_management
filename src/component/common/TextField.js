import React from "react";
import { TextField } from "@mui/material";

const renderTextField = ( {
  input,
  label,
  meta: { touched, error },
  value,
  ...custom
}) => {
  return (
    <TextField
      size="small"
      label={label}
      hintText={label}
      floatingLabelText={label}
      helperText={touched && error}
      
      {...input}
      {...custom}
    />
  );
};
export default renderTextField;
