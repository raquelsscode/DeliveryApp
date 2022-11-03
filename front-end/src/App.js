import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="/customer/products" element={ <ProductsPage /> } />
    </Routes>
  );
}
// com

export default App;
