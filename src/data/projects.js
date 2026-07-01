/**
 * Project list — mix of professional enterprise work + personal AI projects.
 * Each project carries a `category` ('AI' | 'Enterprise') so the Projects
 * filter can cleanly show "AI" work for AI-focused recruiters.
 */
const projects = [
  // === AI / ML Personal Projects ===
  {
    title: 'Git Release Analyzer',
    description:
      'AI tool that compares release branches using Git APIs, producing rich summaries of code changes, commits, MRs, developers, and reviewers. Generates separate non-technical Business Summaries and detailed Technical summaries for deployment risk auditing.',
    tech: ['Python', 'Git API', 'OpenAI', 'FastAPI', 'React'],
    github: 'https://github.com/khazaShaik',
    featured: true,
    category: 'AI',
    hasInteractiveDemo: true,
  },
  {
    title: 'AI Test Agent (TOP)',
    description:
      'Intelligent enhancement for Testing Orchestration Platforms. Automates microservice onboarding, parses controllers/DTOs to draft flow docs, generates valid relational test data, and outputs complete positive/negative scenarios from Jira stories.',
    tech: ['Python', 'LangChain', 'RAG', 'FastAPI', 'Structured Extraction'],
    github: 'https://github.com/khazaShaik',
    featured: true,
    category: 'AI',
    hasInteractiveDemo: true,
  },
  {
    title: 'DocuMind — RAG-Powered Doc Assistant',
    description:
      'Retrieval-augmented Q&A system over technical documentation. Ingests PDFs/Markdown, chunks with recursive splitting, embeds via OpenAI text-embedding-3, retrieves via ChromaDB with hybrid search + cross-encoder reranking. Achieves 87% answer relevance on a 200-question eval set with cited sources via GPT-4.',
    tech: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'FastAPI', 'RAG'],
    github: 'https://github.com/khazaShaik',
    featured: true,
    category: 'AI',
  },
  {
    title: 'AgentFlow — Multi-Agent Workflow',
    description:
      'Multi-agent orchestration system built with LangGraph. Four agents (planner, retriever, executor, critic) collaborate via shared state with tool calling, function routing, and self-correction loops. Triages GitHub issues and drafts contextual responses — reduced manual issue triage time by 70% in testing.',
    tech: ['Python', 'LangGraph', 'LangChain', 'OpenAI', 'Function Calling', 'AI Agents'],
    github: 'https://github.com/khazaShaik',
    featured: true,
    category: 'AI',
  },
  {
    title: 'LocalMind — Self-Hosted LLM Chat',
    description:
      'Privacy-first AI chat running entirely on local hardware. Llama 3 served via Ollama, custom RAG over personal notes using ChromaDB + sentence-transformers, streaming responses through a FastAPI backend and Next.js frontend. Zero external API calls — runs fully offline on an M1 Mac.',
    tech: ['Ollama', 'Llama 3', 'Python', 'FastAPI', 'ChromaDB', 'Next.js'],
    github: 'https://github.com/khazaShaik',
    featured: true,
    category: 'AI',
  },

  // === Enterprise / Professional Projects ===
  {
    title: 'T-Mobile SCM Platform',
    description:
      'Cloud-native supply chain platform powering 5,000+ T-Mobile retail stores. Owns DRI / DRO / DLM modules processing 500K+ daily inventory transactions. Kafka async flows, Cassandra-tuned hot paths (p95: 120ms), and Kubernetes orchestration. Currently delivering TIMO Console + TIMO iOS App.',
    tech: ['Spring Boot', 'Java 17', 'Apigee', 'Cassandra', 'Kafka', 'Kubernetes', 'Angular 16'],
    featured: false,
    category: 'Enterprise',
  },
  {
    title: 'CREW Rest Day Logic — Union Pacific Railroad',
    description:
      'Designed and delivered Rest Day functionality for Union Pacific Railroad\'s crew allocation system serving 30,000+ crew members. Redesigned calculation logic and integrated it end-to-end into the CREW module.',
    tech: ['Spring Boot', 'Java 11', 'Reactive Programming', 'Angular 11', 'Splunk'],
    featured: false,
    category: 'Enterprise',
  },
  {
    title: 'ERCS — Electronic Receipt System',
    description:
      'Electronic receipt and confirmation system for CCIL — processing collateral notices for 200+ financial institutions in India\'s money, G-Sec, and derivative markets. Live in production at enotice.ccilindia.com.',
    tech: ['Spring', 'REST', 'Oracle', 'AngularJS', 'JPA', 'Tomcat'],
    demo: 'https://enotice.ccilindia.com',
    featured: false,
    category: 'Enterprise',
  },
  {
    title: 'eTokens — Coupons Management',
    description:
      'SEO-friendly coupons management platform enabling merchants to create, distribute, and track coupon campaigns with real-time analytics and redemption tracking.',
    tech: ['Angular', 'Spring Boot', 'Java', 'REST API'],
    github: 'https://github.com/khazaShaik',
    featured: false,
    category: 'Enterprise',
  },
  {
    title: 'Vendor Management System (VMS)',
    description:
      'Platform for businesses to manage their contingent vendor ecosystem — obtaining quotes with pricing, capabilities, and turnaround times in one place.',
    tech: ['Java', 'Spring', 'AngularJS', 'REST', 'Oracle'],
    github: 'https://github.com/khazaShaik/VMS',
    featured: false,
    category: 'Enterprise',
  },
];

export default projects;
