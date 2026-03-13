
import { useState } from 'react';

export default function AddFruitForm({ onAdd }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a fruit"
        />
        <button type="submit">Add Fruit</button>
        </form>
    );
}