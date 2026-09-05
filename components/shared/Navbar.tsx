"use client";

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { name: 'Work', href: '/#work' },
  { name: 'How I work', href: '/#approach' },
  { name: 'Writing', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/85 backdrop-blur-sm">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="flex items-baseline justify-between py-5">
          <Link href="/" className="font-display text-2xl leading-none">
            Aashish Khatri
          </Link>

          <nav className="hidden md:flex items-baseline gap-8 t-small" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.name} href={l.href} className="link-ul text-text-secondary hover:text-text-primary">
                {l.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden t-small link-ul"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-border-primary bg-bg-primary" aria-label="Primary">
          <div className="mx-auto max-w-[1320px] px-6 py-4 flex flex-col gap-4 text-lg">
            {links.map((l) => (
              <Link key={l.name} href={l.href} onClick={() => setOpen(false)}>
                {l.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
