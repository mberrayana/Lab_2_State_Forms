import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FruitInput from './components/FruitInput';
import FruitList from './components/FruitList';

export default function App() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);

  const addFruit = (newFruit) => {
  if (newFruit.trim() === '') return;
    setFruits([...fruits, newFruit]);
  };


  const deleteFruit = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };

  return (
    <div>
    <h1>Fruit Basket</h1>
    <FruitInput onAddFruit={addFruit} />
    <FruitList fruits={fruits} onDeleteFruit={deleteFruit} />
    </div>
  );
}
