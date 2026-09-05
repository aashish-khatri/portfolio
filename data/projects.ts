export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    kind: string;
    year: string;
    techShort: string;
    description: string;
    techStack: string[];
    stats?: { label: string; value: string }[];
    image?: { src: string; alt: string };
    links?: ProjectLink[];
    githubUrl?: string;
    featured: boolean;
}

export const projectsData: ProjectItem[] = [
    {
        id: 'nada-app',
        title: 'Nada — network-based matrimony app',
        category: 'Flutter app · live on both stores',
        kind: 'Mobile',
        year: '2026',
        techShort: 'Flutter • Riverpod 3 • WebSockets • Firebase',
        description: 'Founding engineer and sole mobile engineer. Partner seekers are introduced through matchmakers and people they already know, so the client has to make a social graph feel like a feed: every card carries the human chain that brought it to you, requests travel that chain, and a second role (the matchmaker) gets a different toolkit inside the same app. Strict vertical-slice architecture, real-time messaging, hardened OTP auth, and a test suite that enforces the architecture.',
        techStack: ['Flutter', 'Dart', 'Riverpod 3', 'Dio', 'WebSockets', 'Firebase'],
        stats: [
            { label: 'Commits (95% of app)', value: '677' },
            { label: 'Lines of Dart', value: '108k' },
            { label: 'Tests', value: '2,479' }
        ],
        image: { src: '/projects/nada-store-wall.png', alt: 'Nada store wall: discover feed, connection chain, a matchmaker carrying a request, and a confirmed match' },
        links: [
            { label: 'App Store', href: 'https://apps.apple.com/in/app/nada-matchmaking-matrimony/id6786328503' },
            { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.nadanetwork.nada_app' }
        ],
        featured: true
    },
    {
        id: 'nada-site',
        title: 'nadanetwork.com — marketing site',
        category: 'Next.js site · scroll-narrative hero',
        kind: 'Web',
        year: '2026',
        techShort: 'Next.js 16 • React 19 • Tailwind 4 • TypeScript',
        description: 'Built from the starter commit, 40 commits, all mine. The hero is a scroll-narrative "trust graph" that converges as you read; the how-it-works section uses iPhone mockups rendered from code, not screenshots, so a copy change never waits for an app build. Also carries the legal, support and account-deletion pages the stores require, redirects, dark/light theme, and the QR landing page printed collateral opens to.',
        techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4'],
        stats: [
            { label: 'Commits', value: '40' },
            { label: 'Ownership', value: '100%' }
        ],
        links: [
            { label: 'Visit site', href: 'https://nadanetwork.com' }
        ],
        featured: true
    },
    {
        id: 'ibm-z-sdt',
        title: 'IBM Z Software Discovery Tool',
        category: 'Open source · AngularJS → React',
        kind: 'Open source',
        year: '2023',
        techShort: 'React • Redux Toolkit',
        description: 'Selected as one of two Open Mainframe Project mentees (Linux Foundation, Jun–Sep 2023) to migrate the IBM Z Software Discovery Tool frontend from AngularJS to React with hooks + Redux Toolkit, with server-side pagination and filtering for large result sets.',
        techStack: ['React', 'Redux Toolkit', 'AngularJS migration'],
        githubUrl: 'https://github.com/openmainframeproject/software-discovery-tool',
        featured: true
    },
    {
        id: 'nada-prototype',
        title: 'Nada HTML/CSS prototype',
        category: '22 screens · live theme loader',
        kind: 'Prototype',
        year: '2026',
        techShort: 'HTML • CSS • vanilla JS',
        description: 'Built in January 2026, before a line of Dart: 22 screens in plain HTML/CSS with a live theme loader and six alternative palettes. It settled the information architecture and colour direction cheaply, and runs from index.html with no build step.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        stats: [
            { label: 'Screens', value: '22' },
            { label: 'Palettes', value: '6' }
        ],
        featured: true
    }
];
