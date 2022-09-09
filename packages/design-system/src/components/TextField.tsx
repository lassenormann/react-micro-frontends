import React from "react";
import {
  InputAdornment,
  InputAdornmentProps,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldProps = Pick<MuiTextFieldProps, "value" | "label"> & {
  readonly?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export const TextField: React.FC<TextFieldProps> = ({
  startAdornment,
  endAdornment,
  readonly = false,
  label,
  value,
}) => {
  return (
    <MuiTextField
      size="small"
      label={label}
      value={value}
      disabled={readonly}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
    />
  );
};
