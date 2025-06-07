import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page components
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import ProductPage from './pages/ProductPage';
import ServicePage from './pages/ServicePage';
import HRMProductPage from './pages/HRMProductPage';

function App() {
  return (
    <Router basename="/leantech.vn">
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Home page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Blog routes */}
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/page/:pageNumber" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            {/* Product routes */}
            <Route path="/products/lean-hrm" element={<HRMProductPage />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            
            {/* Service routes */}
            <Route path="/services/:slug" element={<ServicePage />} />
            
            {/* Category and tag filters */}
            <Route path="/blog/category/:category" element={<BlogListPage />} />
            <Route path="/blog/tag/:tag" element={<BlogListPage />} />
            
            {/* 404 fallback - redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 