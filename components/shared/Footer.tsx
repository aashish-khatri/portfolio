import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 bg-bg-secondary border-t border-border-primary text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center gap-8 mb-6">
          <a href="mailto:hello@aashishkhatri.dev" className="text-text-secondary hover:text-text-primary transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/aashish-khatri-375506172/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">LinkedIn</a>
          <a href="https://github.com/aashishkhatri" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">GitHub</a>
        </div>
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Aashish Khatri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
