import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import UserHome from './components/user/dashboard/Home';
import AdminLogin from './components/admin/Login';
import Sidebar from './components/Sidebar';
import AdminHome from './components/admin/dashboard/Home'
import Product from './components/admin/dashboard/Product';
import Orders from './components/admin/dashboard/Orders';
import Profile from './components/admin/dashboard/Profile';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const locationPath = useLocation();

  const showNavbar = locationPath.pathname !== '/admin/' &&
    !locationPath.pathname.startsWith('/admin/') ||
    locationPath.pathname === '/admin/login';
  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<AdminLogin />} path='/admin/login' />
        <Route element={<UserHome />} path='/user/dashboard' />

        <Route element={<Sidebar />} path='/admin/dashboard'>
          <Route index element={<AdminHome />} />
          <Route element={<Product />} path='products' />
          <Route element={<Orders />} path='orders' />
          <Route element={<Profile />} path='profile' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
