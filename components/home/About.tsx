"use client";

import TechTag from '../shared/TechTag';
import { Database, Layout, Box } from 'lucide-react';
import { MotionSection, MotionStagger, MotionItem } from '../shared/Motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <MotionSection className="text-center mb-16">
          <div className="font-mono text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
             About Me
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Full-Stack Developer & Systems Architect
          </h2>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <MotionSection delay={0.1} className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Integrated (B.Tech+M.Tech) graduate from IIIT Gwalior specializing in scalable backend systems and cloud-native architectures. Expert in building high-performance microservices with Go, designing distributed systems, and optimizing databases for enterprise-scale applications.
            </p>
            <p>
              Strong foundation in algorithmic problem-solving and system design, with hands-on experience across multiple cloud platforms. Passionate about transforming complex technical requirements into elegant, maintainable solutions that drive business growth and operational efficiency.
            </p>
            
            <div className="pt-4 space-y-4">
              <h3 className="font-display text-xl font-bold text-text-primary">Education</h3>
              <div className="bg-bg-primary p-6 rounded-lg border border-border-primary">
                <div className="font-bold text-text-primary text-lg">B.Tech + M.Tech in Information Technology</div>
                <div className="text-text-muted mb-1">Indian Institute of Information Technology, Gwalior</div>
                <div className="font-mono text-sm text-text-muted">May 2018 - May 2023</div>
                
                <h4 className="font-semibold text-text-primary mt-4 mb-2 text-sm">Relevant Coursework:</h4>
                <ul className="text-sm text-text-muted space-y-1 list-disc pl-4">
                  <li>Data Structures and Algorithms (C++)</li>
                  <li>System Design & Microservices</li>
                  <li>Event-Driven Architecture</li>
                  <li>AWS Solutions Architecture</li>
                  <li>Database Systems (CMU-15-445/645)</li>
                </ul>
              </div>
            </div>
          </MotionSection>

          <MotionStagger className="space-y-8">
            <div className="grid gap-6">
              <MotionItem>
                <div className="bg-bg-primary p-8 rounded-xl border border-border-primary hover:border-accent hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-primary text-bg-primary rounded-lg mb-6 flex items-center justify-center">
                    <Database size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Backend & Infrastructure</h3>
                  <p className="text-text-secondary mb-6">Building scalable distributed systems with modern cloud infrastructure and data storage solutions.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Go', 'Node.js', 'Python', 'C++', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes'].map(tech => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
              </MotionItem>

              <MotionItem>
                <div className="bg-bg-primary p-8 rounded-xl border border-border-primary hover:border-accent hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-primary text-bg-primary rounded-lg mb-6 flex items-center justify-center">
                    <Layout size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Frontend Development</h3>
                  <p className="text-text-secondary mb-6">Creating responsive, user-friendly interfaces with modern frameworks and design principles.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind'].map(tech => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
              </MotionItem>
              
              {/* <MotionItem>
                <div className="bg-bg-primary p-8 rounded-xl border border-border-primary hover:border-accent hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-primary text-bg-primary rounded-lg mb-6 flex items-center justify-center">
                    <Box size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">AI & Machine Learning</h3>
                   <p className="text-text-secondary mb-6">Implementing intelligent solutions with cutting-edge ML frameworks.</p>
                  <div className="flex flex-wrap gap-2">
                     <TechTag>Machine Learning</TechTag>
                  </div>
                </div>
              </MotionItem> */}
            </div>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}

