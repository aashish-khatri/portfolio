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
        id: 'ibm-z',
        role: 'Software Engineer Mentee',
        company: 'Open Mainframe Project / IBM Z (LFX Mentorship)',
        period: 'Jun 2023 – Sep 2023',
        description: 'Contributed to modernizing legacy mainframe applications through frontend architecture improvements and user experience enhancements.',
        achievements: [
            'Improved user interface and experience by implementing modern design principles, leading to more intuitive navigation and compact component display',
            'Enhanced visual branding and user understanding through complete redesign of iconography, dynamic layouts, and key web pages using Figma',
            'Modernized frontend architecture by migrating existing codebase from AngularJS to ReactJS, improving performance and maintainability'
        ],
        techStack: ['React', 'AngularJS', 'Figma', 'UI/UX Design', 'Frontend Migration']
    }
];
