import React from "react";

import IconButton from "./imported-types/IconButton";
import TextField from "./imported-types/TextField";
import FlexContainer from "./imported-types/FlexContainer";

import { Counter as CounterType } from "shared-business-functionality-types";

const Counter: CounterType = () => {
  const [count, setCount] = React.useState(0);
  return (
    <FlexContainer flexDirection="column">
      <TextField
        label="Counter"
        value={"" + count}
        startAdornment={<IconButton onClick={() => setCount(count - 1)}>-</IconButton>}
        endAdornment={<IconButton onClick={() => setCount(count + 1)}>+</IconButton>}
      />
    </FlexContainer>
  );
};

export default Counter;
