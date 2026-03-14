
import { useState } from 'react';

export default function ClickTracker() {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    const handleReset = () => {
        setClicks(0);
    };

    return (
        <div>
            <p>You've clicked {clicks} times</p>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}