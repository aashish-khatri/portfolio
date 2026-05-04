"use client";

import TechTag from '../shared/TechTag';
import { Smartphone, Layout, Server } from 'lucide-react';
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
            Software Engineer & Systems Thinker
          </h2>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <MotionSection delay={0.1} className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Integrated (B.Tech+M.Tech) graduate from IIIT Gwalior. Currently cofounder and app lead at <strong>Nada</strong> — building the Flutter client for a network-trust matrimonial app where brokers and matchmakers introduce partner-seekers through real social graphs.
            </p>
            <p>
              Previously contributed to the IBM Z Software Discovery Tool as an Open Mainframe Project mentee (Linux Foundation, 2023), migrating its frontend from AngularJS to React. Outside of shipped product work, I study distributed systems and backend architecture — and write technical deep-dives on database internals, system design, and infrastructure topics.
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
                    <Smartphone size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Mobile Development</h3>
                  <p className="text-text-secondary mb-6">Building production Flutter apps with Riverpod state management, real-time messaging, and cloud-backed authentication.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Flutter', 'Dart', 'Riverpod', 'Firebase', 'WebSocket', 'REST APIs'].map(tech => (
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
                  <p className="text-text-secondary mb-6">Building responsive, accessible interfaces with modern React, design-system thinking, and a focus on production quality.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'HTML/CSS', 'Figma'].map(tech => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
              </MotionItem>

              <MotionItem>
                <div className="bg-bg-primary p-8 rounded-xl border border-border-primary hover:border-accent hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-primary text-bg-primary rounded-lg mb-6 flex items-center justify-center">
                    <Server size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Backend & Distributed Systems</h3>
                  <p className="text-text-secondary mb-6">Active interest in distributed systems, database internals, and backend architecture. Studying and writing deep-dives on these topics.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Go', 'PostgreSQL', 'Redis', 'gRPC', 'GraphQL', 'Distributed Systems', 'System Design'].map(tech => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
              </MotionItem>
            </div>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
