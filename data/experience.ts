export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    techStack: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        id: 'nada',
        role: 'Cofounder & App Lead',
        company: 'Nada',
        period: 'Feb 2026 – Present',
        description: 'Network-trust matrimonial app where brokers and matchmakers introduce partner-seekers through real social graphs — replacing stranger-swiping with verified introductions. Sole author of the Flutter client; cofounder builds the Vert.x + Neo4j backend.',
        achievements: [
            'Shipped alpha v1.0.0-alpha.1 (April 2026): 91k LOC across 325 Dart files with 110 test files',
            'Built phases 1–4 end-to-end: Firebase phone OTP, 15-step profile wizard with photo crop, swipe-feed Discover with connection-chain visualization, direct + via-broker interest requests, real-time WebSocket chat, broker-mode network feed',
            'Designed the 8-palette design system, integrated Firebase Analytics + Crashlytics, established Riverpod-based feature-first architecture'
        ],
        techStack: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Neo4j', 'Vert.x', 'WebSocket']
    },
    {
        id: 'ibm-z',
        role: 'Software Engineer Mentee',
        company: 'Open Mainframe Project / IBM Z (LFX Mentorship)',
        period: 'Jun 2023 – Sep 2023',
        description: 'Selected as one of two mentees to modernize legacy mainframe applications through frontend architecture improvements and UX enhancements.',
        achievements: [
            'Migrated frontend codebase from AngularJS to React, modernizing the application stack and improving maintainability',
            'Redesigned iconography and key pages in Figma, improving visual branding and user understanding',
            'Implemented compact component layouts and intuitive navigation patterns across the discovery interface'
        ],
        techStack: ['React', 'AngularJS', 'Figma', 'UI/UX Design', 'Frontend Migration']
    }
];
