import Counter from "shared-business-functionality/Counter";
import { Counter as DesignedCounter } from "shared-business-functionality-types";

const CounterComponent = Counter as DesignedCounter;

export default CounterComponent;
