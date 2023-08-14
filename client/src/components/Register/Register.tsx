import React, { useState } from 'react';
import axios from 'axios'; // Import the HTTP client library
import './Register.css';

const RegisterForm: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [streetAddress, setStreetAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            console.log('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/auth/register', {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "street": streetAddress,
                "city": city,
                "state": state,
                "postalCode": postalCode,
                "phone": phoneNumber
            }); // Replace with your API endpoint
            if (response.status === 201) {
                // Login successful, you can perform further actions like redirecting or updating state
                console.log('Registration successful');
            }
        } catch (error) {
            // Handle login error, e.g., show an error message to the user
            console.error('Registration error:', error);
        }
    };

    return (
        <div className='registerform'>
            <div className="name">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="address">
                <input
                    type="text"
                    placeholder="Street Address"
                    className='streetAddress'
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="City"
                    className='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="State"
                    className='state'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Postal Code"
                    className='postalCode'
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
            </div>
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegisterForm;