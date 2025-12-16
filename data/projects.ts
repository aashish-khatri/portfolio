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
        id: 'grpc-graphql-platform',
        title: 'gRPC-GraphQL Microservices Platform',
        category: 'Microservices Architecture',
        year: '2024',
        techShort: 'gRPC • GraphQL • Go',
        description: 'Comprehensive microservices architecture using Go, gRPC for inter-service communication, and GraphQL as a unified API gateway. Implemented polyglot persistence with PostgreSQL and Elasticsearch for optimized data access patterns.',
        techStack: ['Go', 'gRPC', 'GraphQL', 'PostgreSQL', 'Elasticsearch', 'Docker'],
        stats: [
            { label: 'Microservices', value: '3' },
            { label: 'Uptime', value: '99%' }
        ],
        githubUrl: 'https://github.com/aashish-khatri',
        featured: true
    },
    {
        id: 'restaurant-backend',
        title: 'Restaurant Management Backend',
        category: 'REST API Backend',
        year: '2023',
        techShort: 'Go • MongoDB • JWT',
        description: 'Complete backend system for restaurant operations using Go and Gin framework. Features secure JWT authentication, comprehensive REST APIs, and MongoDB integration for efficient menu, order, and customer management.',
        techStack: ['Go', 'Gin Framework', 'MongoDB', 'JWT', 'REST API'],
        stats: [
            { label: 'API Design', value: 'REST' },
            { label: 'Authentication', value: 'Secure' }
        ],
        githubUrl: 'https://github.com/aashish-khatri',
        featured: true
    },
    {
        id: 'video-streaming',
        title: 'Video Streaming Platform',
        category: 'Backend System',
        year: '2023',
        techShort: 'Go • AWS',
        description: 'Built scalable video streaming backend with Go, implementing efficient video processing and CDN integration.',
        techStack: ['Go', 'FFmpeg', 'AWS S3'],
        featured: false
    },
    {
        id: 'ecommerce-gateway',
        title: 'E-commerce API Gateway',
        category: 'API Gateway',
        year: '2023',
        techShort: 'Node.js • GraphQL',
        description: 'Developed unified API gateway for microservices-based e-commerce platform with rate limiting and caching.',
        techStack: ['Node.js', 'Redis', 'GraphQL'],
        featured: false
    },
    {
        id: 'realtime-chat',
        title: 'Real-time Chat System',
        category: 'Real-time System',
        year: '2023',
        techShort: 'Go • WebSocket',
        description: 'Created real-time messaging system with WebSocket connections, message queuing, and user presence tracking.',
        techStack: ['Go', 'WebSocket', 'RabbitMQ'],
        featured: false
    }
];
