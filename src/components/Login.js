import React, { useState } from 'react';
import loginImage from '../images/logo.webp';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((preValue) => ({
            ...preValue,
            [name]: value
        }));
        clearError(name);
    };

    const clearError = (field) => {
        document.getElementById("error-" + field).innerHTML = "";
    };

    const userSignIn = (event) => {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

        clearError("email");
        clearError("password");

        if (!email) {
            document.getElementById("error-email").innerHTML = "Please enter the Email!";
            document.getElementById("email").focus();
            return false;
        }

        if (!email.match(mail)) {
            document.getElementById("error-email").innerHTML = "Invalid Email!";
            document.getElementById("email").focus();
            return false;
        }

        if (!password) {
            document.getElementById("error-password").innerHTML = "Please enter the Password!";
            document.getElementById("password").focus();
            return false;
        }

        const userSignInErrorMessage = document.getElementById('userSignInErrorMessage');

        const formData = new FormData()
        formData.append('email', inputValues.email)
        formData.append('password', inputValues.password)
        axios.post('https://glorious-generosity-production.up.railway.app/banana/app/login', formData)
            .then((response) => {
                if (response.data.data === '1') {
                    alert('Login successfully.');
                    navigate('/user/dashboard');
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    userSignInErrorMessage.innerHTML = "Invalid email or password!";
                } else {
                    console.error("Error occurred while user login! ", error);
                    userSignInErrorMessage.innerHTML = "Server did not respond! Please try again.";
                }
                setInputValues({ email: '', password: '' });
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-yellow-400 px-4">
            <div className="flex bg-gray-800 p-2 py-8 rounded-lg shadow-lg w-full max-w-lg flex-col">

                <div className="flex justify-center items-center mb-6">
                    <img
                        src={loginImage}
                        alt="Logo"
                        className="rounded-full max-w-xs h-36"
                    />
                </div>

                <div className="flex justify-center px-8 text-white">

                    <form id="loginForm" onSubmit={userSignIn} method="post">
                        <div className="mb-4">
                            <label htmlFor="email" className="block">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={handleInputChange}
                                value={inputValues.email}
                                className="w-full md:w-96 text-gray-800 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <br />
                            <span className="error-message text-red-500" id="error-email"></span>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleInputChange}
                                value={inputValues.password}
                                className="w-full md:w-96 text-gray-800 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <br />
                            <span className="error-message text-red-500" id="error-password"></span>
                        </div>

                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full md:w-96 mt-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 hover:text-white"
                            >
                                Login
                            </button>
                        </div>

                        <div className="text-center text-sm">
                            <p>Don't have an account? &nbsp;
                                <Link to="/register" className="text-white hover:text-yellow-400">
                                    Register
                                </Link>
                            </p>
                        </div>
                        <div id="userSignInErrorMessage" className="mt-4 text-red-500 animate-pulse text-center"></div>
                    </form>
                </div>
            </div>
        </div>
    );
}
