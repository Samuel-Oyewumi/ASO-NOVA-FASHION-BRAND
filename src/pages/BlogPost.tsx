import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-cream pb-24"
    >
      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/90 via-wine-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <motion.article 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10"
      >
        <div className="bg-cream-light rounded-2xl p-8 md:p-16 shadow-2xl border border-wine/5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-wine transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
          
          <div className="flex items-center gap-4 text-xs font-semibold text-wine/60 uppercase tracking-widest mb-6">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>{post.author}</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-wine mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="w-24 h-1 bg-accent mb-12" />
          
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-wine prose-p:text-wine/80 prose-p:leading-relaxed prose-a:text-accent">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
