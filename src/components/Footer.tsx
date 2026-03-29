import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-wine-dark text-cream py-16 mt-auto border-t border-wine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="inline-block mb-6 transition-transform hover:scale-105">
              <img src="/logo.png" alt="Aso Nova Logo" className="h-32 md:h-40 w-auto object-contain" />
            </Link>
            <p className="text-sm opacity-80 max-w-xs leading-relaxed">
              Premium African brand specializing in Aso Oke fabric, reimagined into contemporary fashion pieces.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-widest uppercase mb-6 text-accent">Contact</h3>
            <ul className="space-y-4 text-sm opacity-80">
              <li>
                <a href="mailto:shopasonova@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  shopasonova@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347068435102" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                  +234 706 843 5102
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold tracking-widest uppercase mb-6 text-accent">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/shopasonova?igsh=MXBneTVjZzN2MnY1cA==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors transform hover:scale-110 duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/2347068435102" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors transform hover:scale-110 duration-300">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/10 mt-16 pt-8 text-center text-sm opacity-50 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Aso Nova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
