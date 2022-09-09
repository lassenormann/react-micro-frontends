import { Box, BoxProps } from "@mui/material";
import React from "react";

export const FlexContainer: React.FC<BoxProps> = ({
  children,
  flexDirection,
}) => {
  return (
    <Box
      justifyContent="space-between"
      alignItems="top"
      flexDirection={flexDirection}
    >
      {children}
    </Box>
  );
};
