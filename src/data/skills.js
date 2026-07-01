import {
  SiAngular,
  SiSpringboot,
  SiSpringsecurity,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiApachekafka,
  SiApachecassandra,
  SiKubernetes,
  SiDocker,
  SiGithubactions,
  SiSplunk,
  SiPostgresql,
  SiMongodb,
  SiRabbitmq,
  SiOpenai,
  SiLangchain,
  SiHuggingface,
  SiOllama,
  SiAnthropic,
  SiFastapi,
} from 'react-icons/si';
import { FaJava, FaAws, FaMicrosoft } from 'react-icons/fa';
import { HiCpuChip, HiCircleStack, HiSparkles } from 'react-icons/hi2';

/**
 * Skills are listed AI-first since I'm targeting AI Engineering roles.
 * Curated to ~30 skills I can whiteboard or discuss in depth.
 * Each skill carries the brand color used by its tech.
 */
const skills = [
  {
    category: 'AI Engineering',
    items: [
      { name: 'Python',          icon: SiPython,      color: '#3776AB' },
      { name: 'LangChain',       icon: SiLangchain,   color: '#00BB7E' },
      { name: 'LangGraph',       icon: HiSparkles,    color: '#1C3D5A' },
      { name: 'OpenAI / GPT-4',  icon: SiOpenai,      color: '#10A37F' },
      { name: 'Anthropic Claude', icon: SiAnthropic,   color: '#D97757' },
      { name: 'Hugging Face',    icon: SiHuggingface, color: '#FFD21E' },
      { name: 'Ollama',          icon: SiOllama,      color: '#000000' },
      { name: 'FastAPI',         icon: SiFastapi,     color: '#009688' },
      { name: 'RAG Pipelines',   icon: HiCpuChip,     color: '#14B8A6' },
      { name: 'Vector DBs',      icon: HiCircleStack, color: '#22c55e' },
      { name: 'AI Agents',       icon: HiCpuChip,     color: '#8B5CF6' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Java',           icon: FaJava,         color: '#F89820' },
      { name: 'Spring Boot',    icon: SiSpringboot,   color: '#6DB33F' },
      { name: 'Spring Security', icon: SiSpringsecurity, color: '#6DB33F' },
      { name: 'Microservices',  icon: HiCpuChip,      color: '#8B5CF6' },
      { name: 'REST APIs',      icon: HiCpuChip,      color: '#2563EB' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'Angular',        icon: SiAngular,      color: '#DD0031' },
      { name: 'TypeScript',     icon: SiTypescript,   color: '#3178C6' },
      { name: 'JavaScript',     icon: SiJavascript,   color: '#F7DF1E' },
      { name: 'Next.js',        icon: SiNextdotjs,    color: '#737373' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS',            icon: FaAws,          color: '#FF9900' },
      { name: 'Azure',          icon: FaMicrosoft,    color: '#0078D4' },
      { name: 'Docker',         icon: SiDocker,       color: '#2496ED' },
      { name: 'Kubernetes',     icon: SiKubernetes,   color: '#326CE5' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    ],
  },
  {
    category: 'Data & Messaging',
    items: [
      { name: 'Oracle / PL-SQL', icon: HiCircleStack,  color: '#F80000' },
      { name: 'PostgreSQL',     icon: SiPostgresql,   color: '#4169E1' },
      { name: 'MongoDB',        icon: SiMongodb,      color: '#47A248' },
      { name: 'Cassandra',      icon: SiApachecassandra, color: '#1287B1' },
      { name: 'Kafka',          icon: SiApachekafka,  color: '#231F20' },
      { name: 'RabbitMQ',       icon: SiRabbitmq,     color: '#FF6600' },
      { name: 'Splunk',         icon: SiSplunk,       color: '#65A637' },
    ],
  },
];

export default skills;
