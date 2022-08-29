import React from "react";
import { InputAdornment, TextField as MuiTextField } from "@mui/material";
import { TextField as TextFieldType } from "design-system-types";

const TextField: TextFieldType = ({ startAdornment, endAdornment, readonly = false, label, value }) => {
  return (
    <MuiTextField
      size="small"
      label={label}
      value={value}
      disabled={readonly}
      InputProps={{
        startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
        endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
      }}
    />
  );
};

export default TextField;
