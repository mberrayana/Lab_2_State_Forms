
import { useState } from 'react';

export default function SignupFormWithValidation() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const [touched, setTouched] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    });


    const validateEmail = (email) => email.includes('@');
    const validatePassword = (password) => password.length >= 6;
    const validateConfirmPassword = (confirmPassword) =>
    confirmPassword === password && confirmPassword.length > 0;


    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const confirmPasswordIsValid = validateConfirmPassword(confirmPassword);


    const isFormValid = emailIsValid && passwordIsValid && confirmPasswordIsValid;


    const handleBlur = (field) => () => {
        setTouched({ ...touched, [field]: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({
            email: true,
            password: true,
            confirmPassword: true,
        });

        if (isFormValid) {
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
        <div>
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur('email')}
            required
        />
        {touched.email && !emailIsValid && (
        <div style={{ color: 'red' }}>Please enter a valid email</div>
        )}
        </div>

        <div>
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleBlur('password')}
            required
        />
        {touched.password && !passwordIsValid && (
            <div style={{ color: 'red' }}>
            Password must be at least 6 characters
            </div>
        )}
        </div>

        <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleBlur('confirmPassword')}
                required
            />
            {touched.confirmPassword && !confirmPasswordIsValid && (
                <div style={{ color: 'red' }}>Passwords don't match</div>
            )}
        </div>

        <button type="submit" disabled={!isFormValid}>
        Submit
        </button>

        {submitted && (
            <div>
                <p>Form submitted!</p>
                <p>Email: {email}</p>
                <p>Password confirmed</p>
            </div>
        )}
        </form>
    );
}