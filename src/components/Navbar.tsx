import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Catalogue', path: '/' },
    { name: 'Order', path: '/order' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-wine/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-36">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <div className="flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="Aso Nova Logo" className="h-24 md:h-32 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-widest uppercase transition-colors hover:text-accent",
                  location.pathname === link.path ? "text-accent" : "text-wine"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/order" className="relative p-2 text-wine hover:text-accent transition-colors">
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-cream transform translate-x-1/4 -translate-y-1/4 bg-accent rounded-full"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-wine"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-cream border-t border-wine/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-medium tracking-widest uppercase",
                  location.pathname === link.path ? "text-accent" : "text-wine"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
