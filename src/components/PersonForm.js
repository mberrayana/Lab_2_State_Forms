
import { useState } from 'react';

export default function PersonForm() {
    const [firstName, setFirstName] = useState('John');
    const [age, setAge] = useState(25);
    const [isStudent, setIsStudent] = useState(false);

    return (
        <div>
        <p>Name: {firstName}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? 'Yes' : 'No'}</p>

        <button onClick={() => setAge(age + 1)}>Increment Age</button>
        <button onClick={() => setIsStudent(!isStudent)}>Toggle Student</button>
        {/* Optional: Add "Change Name" button functionality here */}
        </div>
    );
}