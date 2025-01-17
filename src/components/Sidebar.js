import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/logo.webp'
export default function Sidebar() {
    const navigate = useNavigate();

    const logoutadmin = () => {
        sessionStorage.clear();
        navigate('/admin/login');
    };

    return (
        <>
            <div className="min-h-screen flex flex-col antialiased bg-gray-200">
                {/* Header */}
                <header className="fixed w-full flex items-center justify-between h-16 bg-gray-800 text-yellow-400 px-4 md:px-8 shadow-lg z-10">
                    <div className="flex items-center space-x-4">
                        <img
                            id="mainImageOfadmin"
                            src={logo}
                            className="w-10 h-10 rounded-full border-2 border-gray-700"
                            alt="Admin"
                        />
                        <span className="text-2xl font-semibold" id="mainNameOfadmin"></span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            onClick={logoutadmin}
                            className="flex items-center hover:text-yellow-500"
                        >
                            Logout &nbsp;&nbsp;
                            <i className="ri-logout-circle-r-line mr-1 text-xl"></i>
                        </button>
                    </div>
                </header>

                {/* Sidebar */}
                <div className="flex flex-col min-h-screen">
                    <aside
                        id="sidebar"
                        className="fixed bottom-0 md:top-16 md:left-0 bg-gray-800 text-yellow-400 shadow-lg w-full md:w-64 md:h-full flex md:flex-col py-4 px-4 z-20 transition-all duration-300"
                    >
                        <ul className="flex md:flex-col w-full justify-between md:justify-start">
                            {/* Dashboard */}
                            <li className="text-center md:text-left ">
                                <Link
                                    to="/admin/dashboard"
                                    className="flex flex-col md:flex-row items-center justify-center md:justify-start p-4 rounded-md hover:bg-yellow-400 hover:text-gray-800 transition md:space-x-3 -ml-3"
                                >
                                    <i className="ri-dashboard-line text-xl md:text-2xl"></i>
                                    <span className="text-xs md:text-sm mt-1 md:mt-0">Dashboard</span>
                                </Link>
                            </li>
                            {/* Products */}
                            <li className="text-center md:text-left">
                                <Link
                                    to="/admin/dashboard/products"
                                    className="flex flex-col md:flex-row items-center justify-center md:justify-start p-4 rounded-md hover:bg-yellow-400 hover:text-gray-800 transition md:space-x-3 -ml-3"
                                >
                                    <i className="ri-projector-fill text-xl md:text-2xl"></i>
                                    <span className="text-xs md:text-sm mt-1 md:mt-0">Products</span>
                                </Link>
                            </li>
                            {/* Orders */}
                            <li className="text-center md:text-left">
                                <Link
                                    to="/admin/dashboard/orders"
                                    className="flex flex-col md:flex-row items-center justify-center md:justify-start p-4 rounded-md hover:bg-yellow-400 hover:text-gray-800 transition md:space-x-3 -ml-3"
                                >
                                    <i className="ri-shopping-cart-fill text-xl md:text-2xl"></i>
                                    <span className="text-xs md:text-sm mt-1 md:mt-0">Orders</span>
                                </Link>
                            </li>
                            {/* Profile */}
                            <li className="text-center md:text-left">
                                <Link
                                    to="/admin/dashboard/profile"
                                    className="flex flex-col md:flex-row items-center justify-center md:justify-start p-4 rounded-md hover:bg-yellow-400 hover:text-gray-800 transition md:space-x-3 -ml-3"
                                >
                                    <i className="ri-profile-line text-xl md:text-2xl"></i>
                                    <span className="text-xs md:text-sm mt-1 md:mt-0">Profile</span>
                                </Link>
                            </li>
                        </ul>
                    </aside>

                    {/* Main Content */}
                    <main className="md:ml-64 p-4 md:p-8 bg-gray-200 min-h-screen transition-all duration-300">
                        <div className="content h-full mb-10 p-6">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
