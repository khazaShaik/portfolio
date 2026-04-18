/**
 * Project list — mix of professional enterprise work + personal AI projects.
 * Each project carries a `category` ('AI' | 'Enterprise') so the Projects
 * filter can cleanly show "AI" work for AI-focused recruiters.
 */
const projects = [
  // === AI / ML Personal Projects ===
  {
    title: 'DocuMind — RAG-Powered Doc Assistant',
    description:
      'A retrieval-augmented Q&A system over technical documentation. Ingests PDFs/Markdown, chunks intelligently, embeds with OpenAI text-embedding-3, retrieves via ChromaDB with hybrid search + reranking, and answers with cited sources via GPT-4.',
    tech: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'FastAPI', 'RAG'],
    github: 'https://github.com/khazaShaik',
    demo: '#',
    featured: true,
    category: 'AI',
  },
  {
    title: 'AgentFlow — Multi-Agent Workflow',
    description:
      'A multi-agent orchestration system built with LangGraph. Agents (planner, retriever, executor, critic) collaborate via shared state with tool calling, function routing, and self-correction loops. Used to triage GitHub issues and draft contextual responses.',
    tech: ['Python', 'LangGraph', 'LangChain', 'OpenAI', 'Function Calling', 'AI Agents'],
    github: 'https://github.com/khazaShaik',
    demo: '#',
    featured: true,
    category: 'AI',
  },
  {
    title: 'LocalMind — Self-Hosted LLM Chat',
    description:
      'Privacy-first AI chat running entirely on local hardware. Llama 3 served via Ollama, custom RAG over personal notes using ChromaDB + sentence-transformers, streaming responses through a FastAPI backend and Next.js frontend.',
    tech: ['Ollama', 'Llama 3', 'Python', 'FastAPI', 'ChromaDB', 'Next.js'],
    github: 'https://github.com/khazaShaik',
    demo: '#',
    featured: true,
    category: 'AI',
  },

  // === Enterprise / Professional Projects ===
  {
    title: 'eTokens — Coupons Management',
    description:
      'A SEO-friendly coupons management platform. Enables merchants to create, distribute, and track coupon campaigns with analytics and redemption tracking.',
    tech: ['Angular', 'Spring Boot', 'Java', 'REST API'],
    github: 'https://github.com/khazaShaik',
    demo: '#',
    featured: false,
    category: 'Enterprise',
  },
  {
    title: 'Vendor Management System (VMS)',
    description:
      'A platform for businesses to manage all aspects of the contingent vendor ecosystem — obtaining quotes with pricing, capabilities, and turnaround times in one place.',
    tech: ['Java', 'Spring', 'AngularJS', 'REST', 'Oracle'],
    github: 'https://github.com/khazaShaik/VMS',
    demo: '#',
    featured: false,
    category: 'Enterprise',
  },
  {
    title: 'T-Mobile SCM Platform',
    description:
      'Cloud-native supply chain platform for T-Mobile retail stores. Owns DRI / DRO / DLM modules with Kafka async flows, Cassandra-tuned hot paths, and Kubernetes orchestration. Currently delivering TIMO Console + TIMO iOS App enhancements.',
    tech: ['Spring Boot', 'Java 17', 'Apigee', 'Cassandra', 'Kafka', 'Kubernetes', 'Angular 16'],
    github: '#',
    demo: '#',
    featured: false,
    category: 'Enterprise',
  },
  {
    title: 'CREW Rest Day Logic — UPRR',
    description:
      'Designed and delivered Rest Day functionality for Union Pacific Railroad\'s crew allocation system. Redesigned calculation logic and integrated it into the CREW module end-to-end.',
    tech: ['Spring Boot', 'Java 11', 'Reactive Programming', 'Angular 11', 'Splunk'],
    github: '#',
    demo: '#',
    featured: false,
    category: 'Enterprise',
  },
  {
    title: 'ERCS — Electronic Receipt System',
    description:
      'Delivered ERCS for CCIL — an electronic receipt and confirmation system for collateral notices. Live in production at enotice.ccilindia.com serving financial market participants.',
    tech: ['Spring', 'REST', 'Oracle', 'AngularJS', 'JPA', 'Tomcat'],
    github: '#',
    demo: 'https://enotice.ccilindia.com',
    featured: false,
    category: 'Enterprise',
  },
];

export default projects;
