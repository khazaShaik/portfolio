const experience = [
  {
    role: 'Cloud Consultant',
    company: 'Concentrix',
    duration: 'Aug 2023 – Present',
    location: 'Hyderabad, India',
    client: 'T-Mobile — Supply Chain Management (SCM)',
    highlights: [
      'Own SCM platform serving 5,000+ T-Mobile retail stores — managing end-to-end digital inventory, reverse logistics, and Device Logistics Management (DLM) processing 500K+ daily transactions',
      'Developing TIMO Console + TIMO iOS App for inventory movement and logistics tracking, reducing manual reconciliation effort by ~60% across the supply chain network',
      'Architected cloud-native microservices with Spring Boot and RESTful APIs; integrated Kafka and RabbitMQ async flows handling 2M+ daily events with zero message loss',
      'Built CI/CD pipelines on GitHub Actions and Azure DevOps; containerized 12+ services with Docker + Kubernetes, cutting deployment time from 4 hours to 25 minutes',
    ],
    tech: ['Java 17', 'Spring Boot', 'Microservices', 'Angular 16', 'AWS', 'Kubernetes', 'Kafka'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Concentrix Catalyst',
    duration: 'Jul 2019 – Aug 2023',
    location: 'Hyderabad, India',
    client: 'T-Mobile US, Inc. & Union Pacific Railroad',
    highlights: [
      'Delivered Crew Allocation and Time Management for Union Pacific Railroad — designed Rest Day logic integrated end-to-end into the CREW module, serving 30,000+ railroad crew members',
      'Sole owner of 3 SCM modules (DRI / DRO / DLM) for T-Mobile — resolved 40+ production incidents and improved module uptime from 99.2% to 99.8%',
      'Integrated Kafka for async communication, enabling high-volume data loads of 100K+ records/batch with 3× throughput improvement over synchronous processing',
      'Tuned Cassandra query patterns and data models, reducing p95 latency from 850ms to 120ms across high-traffic endpoints serving 2M+ daily requests',
      'Authored Jira stories with complete requirement analysis; led root-cause investigations that reduced mean time to resolution (MTTR) by 35%',
    ],
    tech: ['Spring Boot', 'Apigee', 'Cassandra', 'Kubernetes', 'Splunk', 'Angular 8', 'Kafka'],
  },
  {
    role: 'Software Engineer',
    company: 'Tata Consultancy Services',
    duration: 'Feb 2016 – Jul 2019',
    location: 'Mumbai, India',
    client: 'CCIL — Clearing Corporation of India Ltd.',
    highlights: [
      'Built systems for CCIL — India\'s central counterparty providing guaranteed clearing & settlement for Money, G-Secs, Foreign Exchange, and Derivative markets processing ₹15L+ crore daily',
      'Delivered ERCS (Electronic Receipt & Confirmation System) for collateral notices — live in production at enotice.ccilindia.com, serving 200+ financial institutions',
      'Built CRM (Credit Risk Monitoring) from scratch — ingests Excel data from member banks, calculates risk scores, and auto-categorizes participants, replacing a 3-day manual process with a 15-minute automated workflow',
      'Full-stack ownership across 4 applications — back-end APIs, front-end UI, database design, and technical documentation with zero critical production bugs over 18 months',
    ],
    tech: ['Spring', 'REST', 'Oracle', 'Tomcat', 'AngularJS', 'JSP', 'JPA', 'Git'],
  },
];

export default experience;
