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
        role: 'Founding Engineer',
        company: 'Nada Network Private Limited',
        period: 'Jan 2026 – Present',
        description: 'Network-based matrimony app: partner seekers are introduced through matchmakers and people they already know, on a social graph. Live on the App Store and Google Play. Joined alongside the founder, who owned the backend; I owned the client side end to end: product definition, design system, Flutter app, marketing site and launch creative.',
        achievements: [
            'Wrote ~95% of the production Flutter app (677 commits, 108k lines of Dart, 2,479 tests) and carried it through 21 builds from alpha to both stores',
            'Architected the app as strict vertical slices (13 feature modules, 19 repositories, 48 screens) on Riverpod 3 with a Dio JWT-refresh queue and no code generation; the rules are enforced by architecture tests',
            'Built real-time messaging over WebSockets and hardened phone-OTP auth (Firebase → backend JWT): stale-session clearing, reCAPTCHA false-timeout fix, and a generation counter whose regression guard CI greps for by test name',
            'Wrote the test strategy — unit, provider, repository, screen, golden, accessibility, API-contract and architecture-rule suites — plus CI and a tag-triggered APK + AAB release workflow',
            'Shipped privacy-preserving contact sync (client-side hashing) and the store-review compliance surface: UGC report/block, consent management, privacy manifest, 18+ gating',
            'Owned the token-based design system (8 jewel-tone palettes, full dark mode) and hand-wrote the brand motion as custom painters and controllers',
            'Built the marketing site from the starter commit in Next.js 16 / React 19 / Tailwind 4: scroll-narrative trust-graph hero, code-rendered iPhone mockups, legal pages, and the QR landing page for printed collateral'
        ],
        techStack: ['Flutter', 'Dart', 'Riverpod 3', 'Dio', 'WebSockets', 'Firebase', 'Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'GitHub Actions']
    },
    {
        id: 'ibm-z',
        role: 'Software Engineering Mentee (LFX Mentorship, Frontend)',
        company: 'The Linux Foundation · Open Mainframe Project',
        period: 'Jun 2023 – Sep 2023',
        description: 'Selected as one of two mentees to build the frontend of the IBM Z Software Discovery Tool in React under Linux Foundation mentors, taking it from Figma wireframes to a responsive, shipped UI.',
        achievements: [
            'Migrated the frontend from AngularJS to React with hooks and Redux Toolkit, modernising the stack and improving maintainability',
            'Structured the app as code-split, modular components and tuned first contentful paint and time-to-first-byte',
            'Made large result sets usable with server-side pagination and filtering; redesigned iconography and key pages in Figma'
        ],
        techStack: ['React', 'Redux Toolkit', 'JavaScript', 'Figma', 'AngularJS migration']
    }
];
