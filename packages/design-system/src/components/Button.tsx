import React from "react";
import { Button as MuiButton } from "@mui/material";

import { Button as ButtonType } from "design-system-types";

const Button: ButtonType = ({ children, onClick }) => {
  return (
    <MuiButton variant="contained" onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
