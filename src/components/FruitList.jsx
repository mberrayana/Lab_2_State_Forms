
export default function FruitList({ fruits, onDeleteFruit }) {
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>
                {fruit}{" "}
                <button onClick={() => onDeleteFruit(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}