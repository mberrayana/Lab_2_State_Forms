
import { useState } from 'react';

export default function Calculator() {
    const [number, setNumber] = useState(0);

    const handleIncrement = () => {
        setNumber(number + 1);
    };

    const handleDecrement = () => {
        setNumber(number - 1);
    };

    const handleMultiply = () => {
        setNumber(number * 2);
    };

    const handleDivide = () => {
        setNumber(number / 2);
    };

    const handleReset = () => {
        setNumber(0);
    };

    return (
        <div>
            <h2>Current Number: {number}</h2>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleMultiply}>×2</button>
            <button onClick={handleDivide}>÷2</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}