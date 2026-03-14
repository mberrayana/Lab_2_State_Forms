
import { useState } from 'react';

const randomItems = ['Milk', 'Bread', 'Eggs', 'Butter', 'Cheese', 'Juice'];

export default function ShoppingList() {
    const [items, setItems] = useState(['Milk', 'Bread', 'Eggs']);

    const addRandomItem = () => {
    const newItem = randomItems[Math.floor(Math.random() * randomItems.length)];
        setItems([...items, newItem]); // Create new array with added item
    };

    const removeLastItem = () => {
        setItems(items.slice(0, -1)); // Remove last item, create new array
    };

    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li> // Using index as key for simplicity
                ))}
            </ul>
            <button onClick={addRandomItem}>Add Random Item</button>
            <button onClick={removeLastItem} disabled={items.length === 0}>
            Remove Last Item
            </button>
        </div>
    );
}