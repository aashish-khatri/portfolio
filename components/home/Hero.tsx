"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs font-medium uppercase tracking-widest text-text-muted mb-4"
          >
             Cofounder & App Lead • Software Engineer
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Building Nada — a network-trust matrimonial app
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl leading-relaxed"
          >
            Cofounder & App Lead at <strong>Nada</strong>, sole author of the Flutter client for a matrimonial app where brokers and matchmakers introduce partner-seekers through real social graphs. Previously: Open Mainframe Project mentee, migrating the IBM Z Software Discovery Tool from AngularJS to React. Active interest in distributed systems and backend engineering — I <Link href="/blog" className="underline decoration-dotted underline-offset-4 hover:text-accent">write deep-dives</Link> on the topic.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-bg-primary rounded-lg font-medium hover:bg-primary-light transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              View My Work
            </Link>
            <Link 
              href="mailto:aashishkhatri809@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 border border-border-primary text-text-primary rounded-lg font-medium hover:bg-bg-secondary hover:border-accent transition-all"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">Nada</div>
              <div className="text-sm font-medium text-text-muted">Cofounder, App Lead</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">8</div>
              <div className="text-sm font-medium text-text-muted">Systems Deep-dives</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">OMP '23</div>
              <div className="text-sm font-medium text-text-muted">IBM Z Mentee</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">IIIT</div>
              <div className="text-sm font-medium text-text-muted">Gwalior IT</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
