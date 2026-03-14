
import { useState } from 'react';

export default function PreferencesForm() {
    const [username, setUsername] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('Red');
    const [subscribe, setSubscribe] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [heardFrom, setHeardFrom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Username:{' '}
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            </label>
        </div>

        <div>
            <label>
                Favorite Color:{' '}
            <select
            value={favoriteColor}
            onChange={(e) => setFavoriteColor(e.target.value)}
            >
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>
            </label>
        </div>

        <div>
            <label>
            <input
                type="checkbox"
                checked={subscribe}
                onChange={() => setSubscribe((prev) => !prev)}
            />
            Subscribe to newsletter
            </label>
        </div>

        <div>
            <label>
            <input
                type="checkbox"
                checked={acceptTerms}
                onChange={() => setAcceptTerms((prev) => !prev)}
            />
            Accept terms
            </label>
        </div>

        <div>
            <p>How did you hear about us?</p>
            <label>
            <input
                type="radio"
                name="heardFrom"
                value="Friend"
                checked={heardFrom === 'Friend'}
                onChange={(e) => setHeardFrom(e.target.value)}
            />
            Friend
            </label>
            <label>
            <input
                type="radio"
                name="heardFrom"
                value="Google"
                checked={heardFrom === 'Google'}
                onChange={(e) => setHeardFrom(e.target.value)}
            />
            Google
            </label>
            <label>
            <input
                type="radio"
                name="heardFrom"
                value="Social Media"
                checked={heardFrom === 'Social Media'}
                onChange={(e) => setHeardFrom(e.target.value)}
            />
            Social Media
            </label>
            <label>
            <input
                type="radio"
                name="heardFrom"
                value="Other"
                checked={heardFrom === 'Other'}
                onChange={(e) => setHeardFrom(e.target.value)}
            />
            Other
            </label>
        </div>

        <button type="submit">Submit</button>

        {/* Display all values */}
        <div style={{ marginTop: '1em' }}>
            <h3>Current Values:</h3>
            <p>Username: {username}</p>
            <p>Favorite Color: {favoriteColor}</p>
            <p>Subscribed to newsletter: {subscribe ? 'Yes' : 'No'}</p>
            <p>Accepted terms: {acceptTerms ? 'Yes' : 'No'}</p>
            <p>Heard from: {heardFrom || 'None selected'}</p>
        </div>
        </form>
    );
}