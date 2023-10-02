import { useState } from "react";

const useCalculator = (init) => {
    const [value, setValue] = useState(init);
    const add = (op) => setValue(value + Number(op));
    const subtract = (op) => setValue(value - Number(op));
    const multiply = (op) => setValue(value * Number(op));
    const divide = (op) => setValue(value / Number(op));
    const reset = () => setValue(0);
    return [value, add, subtract, multiply, divide, reset];
}

export default useCalculator;