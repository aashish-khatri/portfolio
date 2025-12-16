import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="font-mono text-xs font-medium uppercase tracking-widest text-text-muted mb-4 animate-fade-in-up">
             Software Engineer • Full-Stack Developer
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Building scalable solutions with modern technologies
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl animate-fade-in-up animation-delay-200 leading-relaxed">
            Specialized in <strong>Go, C++, and distributed architectures.</strong> Transforming complex backend challenges into elegant, performant systems that drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up animation-delay-300">
            <Link 
              href="/#projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              View My Work
            </Link>
            <Link 
              href="mailto:aashishkhatri809@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 border border-border-primary text-text-primary rounded-lg font-medium hover:bg-bg-secondary hover:border-accent transition-all"
            >
              Contact Me
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-400">
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">3+</div>
              <div className="text-sm font-medium text-text-muted">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">AWS</div>
              <div className="text-sm font-medium text-text-muted">Cloud Expert</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">5+</div>
              <div className="text-sm font-medium text-text-muted">Microservices Built</div>
            </div>
            <div className="text-center p-4">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">Go/C++</div>
              <div className="text-sm font-medium text-text-muted">Primary Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
