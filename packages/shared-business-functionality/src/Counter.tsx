import React from "react";

import { IconButton } from "@packages/design-system";
import { TextField } from "@packages/design-system";
import { FlexContainer } from "@packages/design-system";

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <FlexContainer flexDirection="column">
      <TextField
        label="Counter"
        value={"" + count}
        startAdornment={
          <IconButton onClick={() => setCount(count - 1)}>-</IconButton>
        }
        endAdornment={
          <IconButton onClick={() => setCount(count + 1)}>+</IconButton>
        }
      />
    </FlexContainer>
  );
};
