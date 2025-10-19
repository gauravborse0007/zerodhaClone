import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import Products from './landing_page/products/ProductPage.js';
import SignupPage from './landing_page/signup/SignupPage.js';
import SupportPage from './landing_page/support/SupportPage.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import NotFound from './landing_page/NotFound.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
