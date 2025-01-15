import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputValues, setInputValues] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Destructure email and password from inputValues
        const { email, password } = inputValues;

        // Ensure both fields are filled before making the request
        if (!email || !password) {
            setErrorMessage('Email and password are required!');
            return;
        }

        // Prepare data for submission
        const formData = {
            email: email.trim(),
            password: password.trim(),
        };

        // Make the API request
        axios.post('https://banana-backend-production.up.railway.app/banana/app/login', formData)
            .then((response) => {
                if (response.data.data === '1') {
                    alert('Login successfully.');
                    // Uncomment if backend provides token and role
                    // sessionStorage.setItem('authToken', response.data.token);
                    // sessionStorage.setItem('userRole', response.data.role);
                    navigate('/user/dashboard');
                } else if (response.data.error) {
                    // Handle errors returned by backend
                    setErrorMessage(response.data.error);
                    setInputValues({ email: '', password: '' });
                } else {
                    // Handle any unexpected case
                    setErrorMessage("An unknown error occurred!");
                    setInputValues({ email: '', password: '' });
                }
            })
            .catch((error) => {
                console.error("Error occurred while user login! " + error);
                setErrorMessage("Server did not respond! Please try again.");
                setInputValues({ email: '', password: '' });
            });
    };

    return (
        <div className="login-container">
            <h2>User Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={inputValues.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={inputValues.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
