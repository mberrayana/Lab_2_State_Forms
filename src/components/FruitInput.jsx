
import { useState } from 'react';

export default function FruitInput({ onAddFruit }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddFruit(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter fruit name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Fruit</button>
        </form>
    );
}