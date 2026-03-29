import React, { useState } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductModal } from './ProductModal';
import { ShoppingBag } from 'lucide-react';

export function ProductCard({ product }: { product: Product; key?: React.Key }) {
  const { addItem } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative flex flex-col overflow-hidden rounded-lg bg-cream-light shadow-md hover:shadow-2xl transition-all duration-500 border border-wine/5">
        <div 
          className="aspect-[3/4] w-full overflow-hidden bg-gray-200 cursor-pointer relative"
          onClick={() => setIsModalOpen(true)}
        >
          {/* NOTE: Replace src with your actual product images */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/10 transition-colors duration-500" />
        </div>
        
        <div className="flex flex-1 flex-col p-6 text-center bg-cream-light z-10">
          <h3 className="font-serif text-xl font-medium text-wine mb-2">
            {product.name}
          </h3>
          <p className="text-xs text-wine/60 mb-4 uppercase tracking-[0.2em]">
            {product.category}
          </p>
          <p className="font-sans text-lg font-semibold text-accent mb-6">
            ₦{product.price.toLocaleString()}
          </p>
          
          <button
            onClick={() => addItem(product)}
            className="mt-auto flex items-center justify-center gap-2 w-full bg-wine text-cream py-3 px-4 rounded-md hover:bg-accent hover:text-wine transition-colors uppercase tracking-widest text-sm font-medium"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ProductModal 
          product={product} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}
