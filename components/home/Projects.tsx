"use client";

import Link from 'next/link';
import TechTag from '../shared/TechTag';
import { projectsData } from '@/data/projects';
import { MotionSection, MotionStagger, MotionItem } from '../shared/Motion';

export default function Projects() {
  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <MotionSection className="text-center mb-16">
          <div className="font-mono text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
             Featured Projects
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Technical Projects & Innovations
          </h2>
        </MotionSection>

        {/* Featured Projects Grid */}
        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <MotionItem key={project.id}>
              <div className="bg-bg-primary border border-border-primary rounded-xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl hover:border-accent group h-full">
                {/* Project Image Placeholder */}
                <div className="w-full h-60 bg-gradient-to-br from-bg-tertiary to-bg-quaternary flex items-center justify-center text-center p-6 border-b border-border-primary group-hover:border-border-secondary transition-colors">
                  <div>
                    <div className="text-lg font-medium text-text-secondary mb-2">{project.category}</div>
                    <div className="font-mono text-xs text-text-muted">{project.techShort}</div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="font-mono text-xs font-medium text-text-muted mb-3 uppercase tracking-wide">Backend • {project.year}</div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-3 group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-border-primary">
                    {project.stats && (
                      <div className="flex space-x-6">
                        {project.stats.map((stat, idx) => (
                          <div key={idx}>
                            <div className="font-bold text-text-primary">{stat.value}</div>
                            <div className="text-xs text-text-muted">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {project.githubUrl && (
                      <Link 
                        href={project.githubUrl} 
                        target="_blank"
                        className="text-text-primary font-medium hover:underline flex items-center gap-1 group/link"
                      >
                        View Code 
                        <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>

        {/* Other Projects Grid */}
        <MotionSection className="text-center mb-12">
          <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Additional Technical Projects</h3>
        </MotionSection>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <MotionItem key={project.id}>
              <div className="bg-bg-secondary border border-border-primary rounded-lg p-6 hover:bg-bg-tertiary transition-colors h-full">
                <h4 className="font-bold text-text-primary mb-2">{project.title}</h4>
                <p className="text-sm text-text-muted mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-bg-primary border border-border-primary rounded text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

