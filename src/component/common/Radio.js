import React from "react";
import { RadioGroup, FormControl,FormLabel } from "@mui/material";

const renderRadioGroup = ({ input, label, ...rest }) => (
    <FormControl className="field field-gender">
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        label={"gender"}
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
      />
    </FormControl>
  );
  export default renderRadioGroup