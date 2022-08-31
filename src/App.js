import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import { AuthProvider } from './utilis/use-auth';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductSub from './pages/ProductSub';
import React from 'react';
import User from './pages/User';

function App() {
  return (
    // 習慣把Provider包在Browser裡面 但順序其實還好
    <BrowserRouter>
      <AuthProvider>
        <Link to="/">Home</Link>
        <br />
        <Link to="about">About</Link>
        <br />
        <Link to="product">Product</Link>
        <br />
        <Link to="product/sub">ProductSub</Link>
        <br />
        <Link to="user">User</Link>
        <br />
        <Link to="login">Login</Link>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="product/sub" element={<ProductSub />} />
          <Route path="user" element={<User />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
