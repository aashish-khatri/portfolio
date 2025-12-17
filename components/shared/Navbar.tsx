"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border-primary z-50 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-display text-xl font-semibold text-text-primary">
            Aashish Khatri
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-text-muted hover:text-text-primary transition-colors font-medium text-base"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/#contact" 
              className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-light transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg font-medium"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-primary focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border-primary">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-text-secondary hover:text-text-primary text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/#contact" 
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-center font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


