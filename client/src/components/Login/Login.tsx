import React, { useState } from 'react';
import axios from 'axios'; // Import the HTTP client library
import './Login.css';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', { email, password }); // Replace with your API endpoint
            if (response.status === 201) {
                // Login successful, you can perform further actions like redirecting or updating state
                console.log('Login successful');
            }
        } catch (error) {
            // Handle login error, e.g., show an error message to the user
            console.error('Login error:', error);
        }
    };

    return (
        <div className='loginform'>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;