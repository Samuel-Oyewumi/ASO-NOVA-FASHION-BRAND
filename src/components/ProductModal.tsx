import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-wine-dark/80 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl bg-cream rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-cream/80 rounded-full text-wine hover:text-accent transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Gallery */}
        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-y-auto snap-y snap-mandatory scrollbar-hide relative">
          {product.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${product.name} - View ${idx + 1}`} 
              className="w-full h-full object-cover snap-center"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto bg-cream">
          <p className="text-xs text-accent uppercase tracking-[0.2em] mb-3 font-semibold">
            {product.category}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-wine mb-4">
            {product.name}
          </h2>
          <p className="text-2xl font-sans text-wine mb-8">
            ₦{product.price.toLocaleString()}
          </p>
          
          <div className="prose prose-sm text-wine/80 mb-10">
            <p className="leading-relaxed">{product.description}</p>
          </div>
          
          <div className="mt-auto pt-8 border-t border-wine/10">
            <button
              onClick={() => {
                addItem(product);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 bg-wine text-cream py-4 px-8 rounded-md hover:bg-accent hover:text-wine transition-colors uppercase tracking-widest text-sm font-medium"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
