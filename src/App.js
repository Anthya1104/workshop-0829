import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductSub from './pages/ProductSub';
import User from './pages/User';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="about">About</Link>
      <br />
      <Link to="product">Product</Link>
      <br />
      <Link to="product/sub">ProductSub</Link>
      <br />
      <Link to="user">User</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/sub" element={<ProductSub />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
