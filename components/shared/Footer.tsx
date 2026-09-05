export default function Footer() {
  return (
    <footer className="border-t border-border-primary">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 t-small text-text-muted">
        <div className="font-display text-xl text-text-primary">Aashish Khatri</div>
        <div className="flex gap-6">
          <a href="mailto:aashishkhatri809@gmail.com" className="link-ul hover:text-text-primary">Email</a>
          <a href="https://www.linkedin.com/in/aashish--khatri/" target="_blank" rel="noopener noreferrer" className="link-ul hover:text-text-primary">LinkedIn</a>
          <a href="https://github.com/aashish-khatri" target="_blank" rel="noopener noreferrer" className="link-ul hover:text-text-primary">GitHub</a>
        </div>
        <div>Noida, India. {new Date().getFullYear()}.</div>
      </div>
    </footer>
  );
}
