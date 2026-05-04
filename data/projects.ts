export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    year: string;
    techShort: string;
    description: string;
    techStack: string[];
    stats?: { label: string; value: string }[];
    githubUrl?: string;
    featured: boolean;
}

export const projectsData: ProjectItem[] = [
    {
        id: 'nada',
        title: 'Nada — Network-Trust Matrimonial App',
        category: 'Mobile App (in flight)',
        year: '2025',
        techShort: 'Flutter • Riverpod • Neo4j',
        description: 'Cofounder & App Lead. Network-trust matrimonial app where brokers and matchmakers introduce partner-seekers through real social graphs — replacing stranger-swiping with verified introductions. Sole author of the Flutter client; cofounder builds the Vert.x + Neo4j backend. Alpha v1.0.0-alpha.1 shipped April 2026.',
        techStack: ['Flutter', 'Riverpod', 'Firebase', 'Neo4j', 'Vert.x'],
        stats: [
            { label: 'Lines of Dart', value: '91k' },
            { label: 'Test files', value: '110' }
        ],
        featured: true
    },
    {
        id: 'ibm-z-sdt',
        title: 'IBM Z Software Discovery Tool',
        category: 'Open Source Migration',
        year: '2023',
        techShort: 'React • Redux Toolkit',
        description: 'Selected as one of two Open Mainframe Project mentees (Linux Foundation, Jun–Sep 2023) to migrate the IBM Z Software Discovery Tool frontend from AngularJS to React with hooks + Redux Toolkit.',
        techStack: ['React', 'Redux Toolkit', 'AngularJS migration'],
        githubUrl: 'https://github.com/openmainframeproject/software-discovery-tool',
        featured: true
    }
];
