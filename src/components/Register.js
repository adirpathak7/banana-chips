import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signUpImage from '../images/banana-waffers.webp'
import axios from 'axios'

export default function Register() {

    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputValues((preValues) => ({
            ...preValues,
            [name]: value
        }))
        clearError(name)
    }

    const clearError = (field) => {
        const errorElement = document.getElementById("error-" + field);
        if (errorElement) {
            errorElement.innerHTML = "";
        }
    }

    const userSingUp = (e) => {
        e.preventDefault()
        var name = document.getElementById("name").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirm_password = document.getElementById("confirm_password").value;
        var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        var phoneRegex = /^\d{10}$/;

        clearError("name");
        clearError("phoneNumber");
        clearError("email");
        clearError("password");
        clearError("confirm_password");

        if (!name) {
            document.getElementById("error-name").innerHTML = "Please enter the Name!";
            document.getElementById("name").focus();
            return false;
        }

        if (!phoneNumber) {
            document.getElementById("error-phoneNumber").innerHTML = "Please enter the Phone!";
            document.getElementById("phoneNumber").focus();
            return false;
        }

        if (!phoneNumber.match(phoneRegex)) {
            document.getElementById("error-phoneNumber").innerHTML = "Invalid Phone Number!";
            document.getElementById("phoneNumber").focus();
            return false;
        }

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

        if (!confirm_password) {
            document.getElementById("error-confirm_password").innerHTML = "Please enter the Confirm Password!";
            document.getElementById("confirm_password").focus();
            return false;
        }

        if (confirm_password !== password) {
            document.getElementById("error-confirm_password").innerHTML = "Password and Confirm password does not match!";
            document.getElementById("confirm_password").focus();
            return false;
        }

        const userSignUpErrorMessage = document.getElementById('userSignUpErrorMessage');
        
        const signUpForm = document.getElementById('signUpForm');
        const signUpFormData = new FormData(signUpForm);

        axios.post('http://localhost:8000/banana/app/register', signUpFormData).then((response) => {
            if (response.data.data === '1') {
                alert("User registered successfully.");
                setInputValues({
                    name: '',
                    phoneNumber: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                })
                navigate('/login')
            }
        }).catch((error) => {
            console.log("Error occurred while user register! " + error)
            userSignUpErrorMessage.innerHTML = 'Server did not respond! Please try again.'
            setInputValues({
                name: '',
                phoneNumber: '',
                email: '',
                password: '',
                confirm_password: '',
            })
        })

    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-yellow-400">
                <div className="flex bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <div className="flex-1 flex justify-center items-center">
                        <img src={signUpImage} alt="Register Image" />
                    </div>
                    <div className="flex-1 px-8 text-white">
                        <h2 className="text-4xl font-bold mb-6">Sign-up To Banana</h2>
                        <form id="signUpForm" onSubmit={userSingUp} method="post">

                            <div className="flex space-x-2 mb-4">
                                <div className="w-1/2">
                                    <label forName="name">Name </label>
                                    <input type="text" id="name" name="name"
                                        onChange={handleInputChange} value={inputValues.name} className="w-full text-gray-800 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                    <span className="error-message" id="error-name"></span>
                                </div>
                                <div className="w-1/2">
                                    <label forName="phoneNumber">Phone</label>
                                    <input type="number" id="phoneNumber" name="phoneNumber"
                                        onChange={handleInputChange} value={inputValues.phoneNumber} className="w-full text-gray-800 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                    <span className="error-message" id="error-phoneNumber"></span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label forName="email">Email</label>
                                <input type="text" id="email" name="email"
                                    onChange={handleInputChange} value={inputValues.email} className="w-full text-gray-800 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <span className="error-message" id="error-email"></span>
                            </div>

                            <div className="flex space-x-2 mb-4">
                                <div className="w-1/2">
                                    <label forName="password">Password</label>
                                    <input type="password" id="password" name="password"
                                        onChange={handleInputChange} value={inputValues.password} className="w-full text-gray-800 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-password"></span>
                                </div>
                                <div className="w-1/2">
                                    <label forName="confirm_password">Confirm Password</label>
                                    <input type="password" id="confirm_password" name="confirm_password"
                                        onChange={handleInputChange} value={inputValues.confirm_password} className="w-full text-gray-800 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-confirm_password"></span>

                                </div>
                            </div>

                            <div className="mb-4">
                                <button type="submit"
                                    className="w-full py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 hover:text-white">Sign-Up</button>
                            </div>

                            <div className="text-center text-sm">
                                <p>Already have an account? &nbsp;
                                    <Link to="/login" className="text-white hover:text-yellow-400">
                                        Login
                                    </Link>
                                </p>
                            </div>
                            <div id="userSignUpErrorMessage" className='mt-4 text-red-500 animate-pulse'></div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
