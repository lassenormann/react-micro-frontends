import { Box } from "@mui/material";
import { FlexContainer as FlexContainerType } from "design-system-types";
import React from "react";

const FlexContainer: FlexContainerType = ({ children, flexDirection }) => {
  return (
    <Box justifyContent="space-between" alignItems="top" flexDirection={flexDirection}>
      {children}
    </Box>
  );
};

export default FlexContainer;
