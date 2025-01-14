import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import AdminLogin from './components/admin/Login';
import Sidebar from './components/Sidebar';
import AdminHome from './components/admin/dashboard/Home'
import Product from './components/admin/dashboard/Product';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const locationPath = useLocation()
  return (
    <div className="App">
      {locationPath.pathname !== '/admin/' && !locationPath.pathname.startsWith('/admin/') && <Navbar />}
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<AdminLogin />} path='/admin/login' />

        <Route element={<Sidebar />} path='/admin/dashboard'>
          <Route index element={<AdminHome />} />
          <Route element={<Product />} path='products' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
