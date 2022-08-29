import React from "react";
import { IconButton as MuiButton } from "@mui/material";

import { IconButton as IconButtonType } from "design-system-types";

const IconButton: IconButtonType = ({ children, onClick }) => {
  return <MuiButton onClick={onClick}>{children}</MuiButton>;
};

export default IconButton;
