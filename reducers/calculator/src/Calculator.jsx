import { useReducer, useRef } from 'react'

const initialValue = 0;

const reducer = (state, action) => {
    action.payload = parseInt(action.payload);
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        case 'SUBTRACT':
            return state - action.payload;
        case 'MULTIPLY':
            return state * action.payload;
        case 'DIVIDE':
            return state / action.payload;
        case 'RESET':
            return initialValue;
        default:
            return state;
    }
};

function Calculator() {

    const [state, dispatch] = useReducer(reducer, initialValue);
    const operand = useRef(null);

    const calculation = (operation, value) => {
        dispatch({ type: operation, payload: value });
    };

    return (
        <>
            <div>
                <h2>{state}</h2>
                <input
                    type="number"
                    ref={operand}
                />
            </div>
            <div>
                <button onClick={() => calculation("ADD", operand.current.value)}>+</button>
                <button onClick={() => calculation("SUBTRACT", operand.current.value)}>-</button>
                <button onClick={() => calculation("MULTIPLY", operand.current.value)}>*</button>
                <button onClick={() => calculation("DIVIDE", operand.current.value)}>/</button>
                <button onClick={() => calculation("RESET", 0)}>Reset</button>
            </div>
        </>
    )
}

export default Calculator