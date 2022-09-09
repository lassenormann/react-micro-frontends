import React from "react";
import { ButtonProps, IconButton as MuiButton } from "@mui/material";

export const IconButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <MuiButton onClick={onClick}>{children}</MuiButton>;
};
