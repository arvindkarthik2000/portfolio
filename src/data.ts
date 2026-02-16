export type Link = { label: string; href: string };

export type Project = {
  title: string;
  description: string[];
  stack: string[];
  date?: string;
  category: "ai" | "fullstack" | "ml" | "nlp";
  links?: Link[];
  image?: string;
};

export type Experience = {
  role: string;
  org: string;
  location: string;
  dates: string;
  logo?: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  dates: string;
  location: string;
  details?: string;
  logo?: string;
};

export const profile = {
  name: "Arvind Karthik",
  headline: "Full-Stack Engineer | ML Engineer | AI Engineer | Data Engineer",
  tagline: "Building scalable AI systems and full-stack applications",
  summary:
    "I build production-ready AI systems, scalable APIs, and full-stack applications. From ML models achieving 94% accuracy to cloud-native microservices handling 10K+ data points. Experienced in end-to-end delivery with Python, Java, React, and AWS.",
  links: [
    { label: "Email", href: "mailto:arvindkarthik2000@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/arvindkarthik26" },
    { label: "GitHub", href: "https://github.com/arvindkarthik2000" }
  ]
};

/* ─── EXPERIENCE ──────────────────────────────── */
export const experience: Experience[] = [
  {
    role: "AI Intern",
    org: "Worldlink",
    location: "Frisco, Texas",
    dates: "Oct 2025 – Present",
    bullets: [
      "Built a Graph RAG system for a tariff assistant to enable accurate, context-aware responses over tariff data.",
      "Developed a risk prediction model using XGBoost to assess shipment and trade risk from structured features.",
      "Implemented backend services using FastAPI APIs for retrieval, inference, and application workflows.",
      "Built web applications using React for dashboards and user workflows and integrated end-to-end with backend services.",
      "Deployed the full-stack application on AWS EC2 and supported configuration and runtime validation."
    ]
  },
  {
    role: "Machine Learning Engineer",
    org: "University of Texas at Arlington",
    location: "Arlington, Texas",
    dates: "June 2025 – Oct 2025",
    bullets: [
      "Developing backend services using Python and Flask to visualize and analyze data from 10K+ sensor readings.",
      "Applied YOLOv8 and Faster R-CNN for automated damage detection, improving defect identification accuracy by 93%.",
      "Built ML models using XGBoost and LSTM to monitor bridge health with 90%+ precision on time-series data.",
      "Orchestrating automated computation pipelines and REST APIs for pavement evaluation workflows."
    ]
  },
  {
    role: "Research Assistant",
    org: "University of Texas at Arlington",
    location: "Arlington, Texas",
    dates: "April 2024 – May 2025",
    bullets: [
      "Led a team and implemented automated rebar detection and reduced manual efforts by 80% using object detection.",
      "Developed Spring Boot APIs for TxDOT analytics systems, reducing processing time by 30%.",
      "Built an enhanced YOLOv8 model, achieving 94% mAP@50 accuracy for structural health assessment workflows.",
      "Collaborated with civil engineering teams to implement scalable damage detection platforms.",
      "Designed a React and Spring Boot application, deployed it on AWS EC2 for live sensor data analysis."
    ]
  },
  {
    role: "Software Engineer",
    org: "ValueMomentum",
    location: "Hyderabad, India",
    dates: "May 2022 – Dec 2022",
    bullets: [
      "Developed full-stack enterprise web applications using Spring Boot REST APIs and React for internal business workflows.",
      "Built secure authentication and role-based authorization, implemented validation, pagination, and error handling.",
      "Integrated PostgreSQL and MongoDB for transactional and semi-structured data; optimized queries for performance.",
      "Implemented asynchronous processing using Kafka and caching with Redis to improve throughput and response times.",
      "Containerized services using Docker and deployed on AWS EC2 with environment-based configuration and monitoring.",
      "Collaborated with cross-functional teams to deliver features end-to-end and support production incidents."
    ]
  },
  {
    role: "Data Science Intern",
    org: "Plotmydata",
    location: "Hyderabad, India",
    dates: "June 2021 – Nov 2021",
    bullets: [
      "Built backend services for ML model deployment using RESTful APIs.",
      "Developed NLP pipelines with TF-IDF and Word2Vec, achieving 85% precision.",
      "Applied EDA, feature scaling, and hyperparameter tuning across 5+ datasets.",
      "Built a Healthcare Chatbot using Python and NLP, automating responses for 500+ medical queries."
    ]
  },
  {
    role: "Machine Learning Intern",
    org: "TheSmartBridge",
    location: "Hyderabad, India",
    dates: "April 2020 – June 2020",
    bullets: [
      "Developed a University Admission Prediction web platform using Spring Boot, React, and IBM Watson."
    ]
  }
];

/* ─── PROJECTS ────────────────────────────────── */
export const projects: Project[] = [
  // ── From Worldlink experience ──
  {
    title: "Tariff Intelligence — Graph RAG Assistant",
    date: "2025",
    category: "ai",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop",
    stack: ["FastAPI", "Python", "Neo4j", "PostgreSQL", "React", "AWS"],
    description: [
      "Graph RAG over tariff data to deliver grounded, context-aware answers with history and structured outputs.",
      "Integrated Neo4j knowledge graph with vector search for hybrid retrieval.",
      "Built React dashboards for query exploration and response visualization."
    ],
    links: [{ label: "GitHub", href: "https://github.com/arvindkarthik2000" }]
  },
  {
    title: "Shipment Risk Prediction",
    date: "2025",
    category: "ml",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=300&fit=crop",
    stack: ["Python", "XGBoost", "SHAP", "FastAPI", "React"],
    description: [
      "XGBoost-based risk scoring with explainability hooks for operational shipment decisions.",
      "Feature engineering from structured trade data with SHAP-based model interpretability.",
      "Deployed as a FastAPI microservice with React dashboard integration."
    ],
    links: [{ label: "GitHub", href: "https://github.com/arvindkarthik2000" }]
  },
  // ── From UTA experience ──
  {
    title: "Bridge Health Monitoring — Sensor Analytics",
    date: "2025",
    category: "ml",
    image: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=600&h=300&fit=crop",
    stack: ["Python", "Flask", "XGBoost", "LSTM", "YOLOv8"],
    description: [
      "ML models using XGBoost and LSTM to monitor bridge health with 90%+ precision on time-series data.",
      "Applied YOLOv8 and Faster R-CNN for automated damage detection with 93% accuracy.",
      "Built Flask services to visualize and analyze data from 10K+ sensor readings."
    ],
    links: [{ label: "GitHub", href: "https://github.com/arvindkarthik2000" }]
  },
  {
    title: "Hyperbola Detection — GPR Analysis",
    date: "2024",
    category: "ml",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=300&fit=crop",
    stack: ["Python", "YOLOv8", "OpenCV", "NumPy", "Jupyter"],
    description: [
      "Enhanced YOLOv8 model achieving 94% mAP@50 for structural health assessment from GPR scans.",
      "Automated rebar detection reducing manual efforts by 80% using object detection pipelines.",
      "Collaborated with civil engineering teams on scalable damage detection platforms."
    ],
    links: [{ label: "GitHub", href: "https://github.com/arvindkarthik2000/hyperbola_detection" }]
  },
  // ── From ValueMomentum experience ──
  {
    title: "Enterprise Ratings Workflow System",
    date: "Aug 2024",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    stack: ["Spring Boot", "React", "PostgreSQL", "Kafka", "Redis"],
    description: [
      "Full-stack ratings workflow app with Spring Boot APIs for deal intake, scoring, approvals, and audit trails.",
      "Role-based access control with workflow state transitions, server-side validation and error handling.",
      "Integrated PostgreSQL, Redis caching for low-latency reads, and Kafka for event-driven updates."
    ]
  },
  {
    title: "Project Flow Management Platform",
    date: "Jun 2024",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=300&fit=crop",
    stack: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "AWS"],
    description: [
      "Full-stack project and task management system with Spring Boot services and an Angular web app.",
      "REST APIs for project creation, task assignment, progress tracking, and reporting with pagination.",
      "Containerized with Docker and deployed on AWS EC2 with environment-based configuration."
    ]
  },
  // ── From GitHub repos ──
  {
    title: "End-to-End Medical Chatbot",
    date: "2025",
    category: "nlp",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop",
    stack: ["Python", "LangChain", "Pinecone", "Flask", "NLP"],
    description: [
      "Medical Q&A chatbot using LangChain with Pinecone vector store for knowledge retrieval.",
      "Ingests medical literature and provides context-aware responses to health queries.",
      "Flask-based API backend with conversational memory and source attribution."
    ],
    links: [{ label: "GitHub", href: "https://github.com/arvindkarthik2000/End-to-end-Medical-Chatbot" }]
  },
  {
    title: "Conference Management System",
    date: "2025",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop",
    stack: ["Node.js", "React", "MongoDB", "Express"],
    description: [
      "Full-stack conference management platform for paper submissions, reviews, and scheduling.",
      "Role-based portals for authors, reviewers, and organizers with real-time notifications.",
      "RESTful API backend with MongoDB for flexible document storage."
    ],
    links: [{ label: "GitHub", href: "https://github.com/arvindkarthik2000/conference_management" }]
  },
  {
    title: "University Admission Prediction",
    date: "2020",
    category: "ml",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=300&fit=crop",
    stack: ["Spring Boot", "React", "IBM Watson", "Python"],
    description: [
      "Web platform predicting university admission chances using ML models and IBM Watson APIs.",
      "Spring Boot backend with React frontend for interactive predictions.",
      "Trained on historical admission data with feature importance analysis."
    ],
    links: [{ label: "GitHub", href: "https://github.com/arvindkarthik2000/University-Admission-Prediction" }]
  }
];

/* ─── SKILLS ──────────────────────────────────── */

/** Mapping of skill name -> devicon / simpleicons slug for logo URLs */
export const skillLogos: Record<string, string> = {
  // Languages
  Java: "java",
  Python: "py",
  TypeScript: "ts",
  JavaScript: "js",
  "C++": "cpp",
  // Frameworks
  "Spring Boot": "spring",
  "Node.js": "nodejs",
  NestJS: "nestjs",
  "React.js": "react",
  Angular: "angular",
  Flask: "flask",
  FastAPI: "fastapi",
  TensorFlow: "tensorflow",
  PyTorch: "pytorch",
  // Cloud & DevOps
  AWS: "aws",
  Docker: "docker",
  Kubernetes: "kubernetes",
  GitHub: "github",
  // Databases
  MySQL: "mysql",
  PostgreSQL: "postgres",
  MongoDB: "mongodb",
  // Tools
  Git: "git",
  "VS Code": "vscode",
  Postman: "postman"
};

export const skills = {
  "Programming Languages": {
    icon: "lang" as const,
    items: ["Java", "Python", "TypeScript", "JavaScript", "C++"]
  },
  "Frameworks & Libraries": {
    icon: "fw" as const,
    items: ["Spring Boot", "FastAPI", "Flask", "Node.js", "NestJS", "React.js", "Angular", "PyTorch", "TensorFlow"]
  },
  "Cloud & DevOps": {
    icon: "cloud" as const,
    items: ["AWS", "Docker", "Kubernetes", "GitHub"]
  },
  "Databases": {
    icon: "data" as const,
    items: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  "Developer Tools": {
    icon: "tools" as const,
    items: ["Git", "VS Code", "Postman"]
  }
};

/* ─── EDUCATION ───────────────────────────────── */
export const education: Education[] = [
  {
    school: "GITAM University, Hyderabad",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    dates: "June 2018 – Apr 2022",
    location: "Hyderabad, India",
    details: "CGPA 8.36/10"
  },
  {
    school: "University of Texas at Arlington",
    degree: "Master of Science (M.S) in Computer Science",
    dates: "Aug 2023 – May 2025",
    location: "Arlington, Texas",
    details: "CGPA 3.91/4"
  }
];

/* ─── CERTIFICATIONS ──────────────────────────── */
export const certifications = [
  {
    provider: "Snowflake",
    name: "SnowPro Core Certification",
    logo: "https://cdn.simpleicons.org/snowflake/29B5E8"
  },
  {
    provider: "Google",
    name: "Associate Cloud Engineer",
    logo: "https://cdn.simpleicons.org/google/4285F4"
  },
  {
    provider: "Microsoft",
    name: "Microsoft Certified: Fabric Data Engineer Associate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    provider: "Databricks",
    name: "Certified Data Engineer Associate",
    logo: "https://cdn.simpleicons.org/databricks/FF3621"
  }
];
