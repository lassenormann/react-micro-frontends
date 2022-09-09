import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <MuiButton variant="contained" onClick={onClick} color="warning">
      {children}
    </MuiButton>
  );
};
