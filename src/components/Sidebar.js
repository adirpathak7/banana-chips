import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const navigate = useNavigate()

    const logoutadmin = () => {
        sessionStorage.clear()
        navigate('/admin/login')
    }
    return (
        <>
            <div class="min-h-screen flex flex-col flex-auto antialiased">

                <header
                    class="fixed w-full flex items-center justify-between h-16 bg-gray-800 text-yellow-400 px-8 shadow-lg z-10">
                    <div class="flex items-center space-x-4">
                        <img id="mainImageOfadmin" class="w-10 h-10 rounded-full border-2 border-gray-700" />
                        <span class="text-2xl font-semibold" id="mainNameOfadmin"></span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="relative group">
                            <button type="button" onClick={logoutadmin} class="flex items-center hover:text-yellow-500">
                                Logout &nbsp;&nbsp;
                                <i class="ri-logout-circle-r-line mr-1 text-xl"></i>
                            </button>

                            <span
                                class="absolute left-1/2 transform -translate-x-1/2 top-10 bg-gray-800 text-white text-sm rounded-lg px-3 py-1 hidden group-hover:block">
                                LogOut
                            </span>
                        </div>
                    </div>

                </header>

                <aside
                    class="fixed top-16 left-0 h-full w-14 hover:w-64 md:w-64 bg-gray-800 text-yellow-400 transition-all duration-300 shadow-lg z-10">
                    <ul id="sidebar-menu" class="flex flex-col py-6 space-y-3">
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/admin/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 rounded-lg">
                                    <i class="ri-dashboard-line text-xl"></i><span class="ml-4 hidden md:block">Dashboard</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/admin/dashboard/products'>
                                <span
                                    class="flex items-center p-4 hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 rounded-lg">
                                    <i class="ri-projector-fill text-xl"></i><span class="ml-4 hidden md:block">Products</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/admin/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 rounded-lg">
                                    <i class="ri-macbook-fill text-xl"></i><span
                                        class="ml-4 hidden md:block">Freelancers</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/admin/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 rounded-lg">
                                    <i class="fas fa-briefcase text-xl"></i><span class="ml-4 hidden md:block">Payment</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/admin/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 rounded-lg">
                                    <i class="fas fa-user text-xl"></i><span class="ml-4 hidden md:block">Profile</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/admin/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 rounded-lg">
                                    <i class="ri-message-2-fill text-xl"></i><span class="ml-4 hidden md:block">Help</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/admin/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 rounded-lg">
                                    <i class="fas fa-cog text-xl"></i><span class="ml-4 hidden md:block">Settings</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </aside>

                <main class="ml-14 md:ml-64 p-8 pt-24 bg-gray-100 min-h-screen">
                    <div class="content h-full mb-10 p-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}
