import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Order() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const orderDetails = items.map(item => `${item.quantity}x ${item.name} (₦${(item.price * item.quantity).toLocaleString()})`).join('%0A');
    const total = `₦${totalPrice.toLocaleString()}`;
    
    const message = `Hello Aso Nova! I would like to place an order:%0A%0A*Order Details:*%0A${orderDetails}%0A%0A*Total:* ${total}%0A%0A*Payment Method:* Pay on Delivery`;
    
    const whatsappUrl = `https://wa.me/2347068435102?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center"
      >
        <h2 className="font-serif text-4xl font-bold text-wine mb-6">Your Cart is Empty</h2>
        <p className="text-wine/70 mb-8 max-w-md">
          Looks like you haven't added any of our beautiful Aso Oke pieces to your cart yet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-wine text-cream px-8 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-accent hover:text-wine transition-all duration-300"
        >
          Shop Collection
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-wine mb-12 text-center">
        Your Order
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-7 space-y-8">
          {items.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={item.id} 
              className="flex flex-col sm:flex-row gap-6 bg-cream-light p-6 rounded-xl shadow-sm border border-wine/5"
            >
              <div className="w-full sm:w-32 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-wine mb-1">{item.name}</h3>
                    <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">{item.category}</p>
                  </div>
                  <p className="font-sans text-lg font-bold text-wine">₦{(item.price * item.quantity).toLocaleString()}</p>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center border border-wine/20 rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-wine hover:bg-cream hover:text-accent transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium text-wine">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-wine hover:bg-cream hover:text-accent transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-800 hover:text-red-600 p-2 transition-colors flex items-center gap-2 text-sm font-medium uppercase tracking-wider"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="flex justify-between items-center pt-6 border-t border-wine/10">
            <button
              onClick={clearCart}
              className="text-wine/60 hover:text-wine text-sm font-medium uppercase tracking-wider transition-colors"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-sm text-wine/70 uppercase tracking-wider mb-1">Subtotal</p>
              <p className="font-serif text-3xl font-bold text-wine">₦{totalPrice.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="bg-wine text-cream p-8 rounded-2xl shadow-xl sticky top-28">
            <h2 className="font-serif text-2xl font-bold mb-8 tracking-wide">Complete Order</h2>
            
            <div className="space-y-6">
              <p className="text-cream/80 leading-relaxed">
                To complete your order, please click the button below. You will be redirected to WhatsApp where our team will confirm your items and arrange for payment and delivery.
              </p>
              
              <div className="pt-6 mt-6 border-t border-cream/20">
                <div className="flex items-center gap-3 mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <p className="text-sm font-medium text-accent">Pay on Delivery available for this order</p>
                </div>
                
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-3 bg-accent text-wine py-4 px-6 rounded-md hover:bg-cream transition-colors uppercase tracking-widest font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </button>
                <p className="text-center text-xs opacity-60 mt-4">
                  Redirects to WhatsApp (+234 706 843 5102)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
