import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import SaleDetails from './pages/SaleDetails';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="/customer/products" element={ <ProductsPage /> } />
      <Route path="/customer/checkout" element={ <CheckoutPage /> } />
      <Route path="/customer/orders/:id" element={ <SaleDetails /> } />
    </Routes>
  );
}
// com

export default App;
