/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Catalogue } from './pages/Catalogue';
import { Order } from './pages/Order';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-cream text-wine font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Catalogue />} />
              <Route path="/order" element={<Order />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
