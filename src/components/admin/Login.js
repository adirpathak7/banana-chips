import React, { useState } from 'react'
import logoImage from '../../images/logo.webp'  // Assuming the logo file is 'logo.webp'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputValues((preValue) => ({
      ...preValue,
      [name]: value
    }))
    clearError(name)
  }

  const clearError = (field) => {
    document.getElementById("error-" + field).innerHTML = ""
  }

  const adminSignIn = (event) => {
    event.preventDefault()
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

    const adminSignInErrorMessage = document.getElementById('adminSignInErrorMessage');

    if (email === "admin@gmail.com" && password === "admin") {
      navigate('/admin/dashboard');
      return true;
    } else {
      adminSignInErrorMessage.innerHTML = "Invalid email or password!";
      return false;
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-yellow-400 px-4">
        <div className="flex bg-gray-800 p-2 py-8 rounded-lg shadow-lg w-full max-w-lg flex-col">

          <div className="flex justify-center items-center mb-6">
            <img
              src={logoImage}
              alt="Logo"
              className="rounded-full max-w-xs h-36"  // Make the logo rounded and responsive
            />
          </div>

          <div className="flex justify-center px-8 text-white">
            <form id="loginForm" onSubmit={adminSignIn} method="post">
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

              <div id="adminSignInErrorMessage" className="mt-4 text-red-500 animate-pulse"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
