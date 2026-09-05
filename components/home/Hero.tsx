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
             Founding Engineer at Nada • Frontend / Mobile Engineer
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            I shipped Nada — a Flutter app, from empty repo to both stores
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl leading-relaxed"
          >
            Founding Engineer at <strong>Nada</strong>, where I wrote ~95% of the production Flutter app and 100% of its Next.js marketing site, and carried both through store review. I care about architecture rules enforced by tests, CI that catches regressions by name, and UI that feels hand-made. Previously an LFX mentee on the IBM Z Software Discovery Tool. I also <Link href="/blog" className="underline decoration-dotted underline-offset-4 hover:text-accent">write deep-dives</Link> on distributed systems.
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
              <div className="font-display text-4xl font-bold text-text-primary mb-1">677</div>
              <div className="text-sm font-medium text-text-muted">Commits, 95% of the app</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">2.4k</div>
              <div className="text-sm font-medium text-text-muted">Tests in 181 files</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">2</div>
              <div className="text-sm font-medium text-text-muted">Stores, live</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">OMP &apos;23</div>
              <div className="text-sm font-medium text-text-muted">LFX Mentee, IBM Z</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
