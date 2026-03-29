import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Blog() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-cream"
    >
      {/* Blog Header */}
      <section className="bg-wine py-24 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-6 tracking-tight">
            Stories, Style & Culture
          </h1>
          <p className="text-accent text-lg md:text-xl font-medium tracking-widest uppercase">
            The Aso Nova Journal
          </p>
        </motion.div>
      </section>

      {/* Article Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={post.id} 
              className="group flex flex-col bg-cream-light rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-wine/5"
            >
              <Link to={`/blog/${post.id}`} className="block overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </Link>
              
              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-center gap-4 text-xs font-semibold text-accent uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span>{post.author}</span>
                </div>
                
                <h2 className="font-serif text-2xl font-bold text-wine mb-4 line-clamp-2 group-hover:text-accent transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-wine/70 mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-wine font-semibold uppercase tracking-widest text-sm hover:text-accent transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
