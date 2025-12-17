"use client";

import TechTag from '../shared/TechTag';
import { experienceData } from '@/data/experience';
import { MotionSection, MotionStagger, MotionItem } from '../shared/Motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <MotionSection className="text-center mb-16">
          <div className="font-mono text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
             Experience
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Professional Journey
          </h2>
        </MotionSection>

        <div className="max-w-4xl mx-auto">
          <MotionStagger className="relative pl-8 md:pl-12 border-l-2 border-border-primary space-y-12">
            {experienceData.map((item) => (
              <MotionItem key={item.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[43px] md:-left-[59px] top-2 w-3 h-3 bg-primary rounded-full border-2 border-bg-primary ring-4 ring-bg-primary"></div>

                <div className="bg-bg-primary border border-border-primary rounded-xl p-8 transition-all hover:border-accent hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                        {item.role}
                      </h3>
                      <div className="text-lg text-text-secondary font-medium">
                        {item.company}
                      </div>
                    </div>
                    <div className="font-mono text-sm text-text-muted bg-bg-secondary px-3 py-1 rounded self-start md:self-auto">
                      {item.period}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2 text-text-secondary">
                      {item.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 text-text-muted">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.techStack.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}

