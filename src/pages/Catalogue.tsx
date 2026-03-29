import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Catalogue() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cream"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[85vh] bg-wine-dark flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* NOTE: Replace src with your actual hero image */}
          <img
            src="/Banner.jpeg"
            alt="Aso Nova Hero"
            className="w-full h-full object-contain object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-wine-dark/50 mix-blend-multiply" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 tracking-tight"
          >
            Aso Nova
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-accent font-medium tracking-widest uppercase mb-12"
          >
            Heritage in style.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#collection"
              className="inline-flex items-center gap-2 bg-accent text-wine px-8 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-cream transition-all duration-300 hover:scale-105"
            >
              Shop Collection
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="collection" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wine mb-6">
            The Collection
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-wine py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/texture/1920/1080')] mix-blend-overlay object-cover" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-8 leading-tight">
            Wear culture. <br/>
            <span className="text-accent italic">Own elegance.</span>
          </h2>
          <p className="text-cream/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Every piece is a testament to the rich heritage of Aso Oke, woven with intention and tailored for the modern world.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-accent text-accent px-8 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-accent hover:text-wine transition-all duration-300"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
