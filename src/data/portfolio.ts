import { Github, Linkedin, Code2, Trophy, Mail, BookOpen, FileText } from "lucide-react";
import avatarImage from "@/assets/Snehasish.jpeg";
import agriCompanionImg from "@/assets/agri-companion.jpg";
import ChhatroBondhuImg from "@/assets/ChhatroBondhu.jpg";
import OSSIImg from "@/assets/OSSI.png";
import hackverseImg from "@/assets/Certificates/hackverse-2026.jpg";
import SIHImg from "@/assets/Certificates/SIH.jpg";

const shot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

export const profile = {
  name: "Snehasish Dey",
  firstName: "Snehasish",
  role: "Full Stack Web Developer",
  email: "snehasishdey02@gmail.com",
  location: "Kolkata · West Bengal, India",
  avatar: avatarImage,
  octocat: "https://bikram-dot-dev.vercel.app/octocat.png",
  intro: ", 3rd year B.Tech Information Technology student who loves turning ideas into working products. Frontend developer exploring backend, learning by building — programming isn't just my course, it's my craft.",
};

export const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/Snehasish-tech" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/snehasish-dey",
  },
  { label: "LeetCode", icon: Code2, href: "https://leetcode.com/u/snehasishdey02" },
  { label: "Email", icon: Mail, href: "mailto:snehasishdey02@gmail.com" },
  {
    label: "Resume",
    icon: FileText,
    // PDF is available in the resume section
    href: "https://github.com/Snehasish-tech/Resume/blob/main/Snehasish_Dey_Resume.pdf",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Resume", href: "#resume" },
];


export const miniProjects = [
  {
    title: "ChhatroBondhu 2.0",
    desc: "AI-powered study companion with gamification, smart note search and collaboration features for students.",
    tags: ["React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Agri-Companion",
    desc: "Smart farming platform with AI crop advisor, live market prices, weather insights and a farmer marketplace.",
    tags: ["TypeScript", "AI", "Supabase"],
  },
  {
    title: "OSS Sustainability Intelligence",
    desc: "A human-centric platform to assess open-source project health, maintainer workload and sustainability risk.",
    tags: ["TypeScript", "Next.js", "Data Viz"],
  },
];

export const techSlugs: Record<string, string> = {
  C: "c",
  "C++": "cplusplus",
  Python: "python",
  Java: "openjdk",
  JavaScript: "javascript",
  TypeScript: "typescript",
  SQL: "mysql",
  React: "react",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  HTML5: "html5",
  CSS3: "css",
  Vite: "vite",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  Django: "django",
  "REST APIs": "swagger",
  PostgreSQL: "postgresql",
  Supabase: "supabase",
  MySQL: "mysql",
  Git: "git",
  GitHub: "github",
  "VS Code": "vscodium",
  Vercel: "vercel",
  Figma: "figma",
};

export const techGroups: { group: string; note: string; items: string[] }[] = [
  {
    group: "Languages",
    note: "Core languages I use for problem solving, DSA practice and application development.",
    items: ["C", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    group: "Frontend",
    note: "Building accessible, responsive interfaces with a component-driven workflow.",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
  },
  {
    group: "Backend",
    note: "Server-side APIs, authentication and business logic — the layer I'm actively deepening.",
    items: ["Node.js", "Express.js", "Django", "REST APIs"],
  },
  {
    group: "Database",
    note: "Modelling and querying relational and document data for production apps.",
    items: ["PostgreSQL", "Supabase", "MySQL"],
  },
  {
    group: "Tools",
    note: "Everyday tooling for version control, testing, deployment and design handoff.",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
  },
];

export const learning = ["System Design", "AI Integrations", "Machine Learning"];

export type Project = {
  name: string;
  tagline: string;
  image: string;
  logo?: string;
  desc: string;
  points: string[];
  stack: { label: string; color: string }[];
  github: string;
  live: string;
};

export const projects: Project[] = [
   {
    name: "OSSI- Open Source Sustainability Intelligence",
    tagline: "Open-Source Health & Risk Analytics",
    image: shot("https://open-source-sustainability-intellig.vercel.app/"),
    logo: OSSIImg,
    desc: "A human-centric platform that assesses open-source project health, maintainer workload, sustainability risk and trust — so communities and companies can act before projects burn out.",
    points: [
      "Aggregated repository activity signals into a single project health score",
      "Modelled maintainer workload to surface burnout and bus-factor risk early",
      "Designed data visualisations that make sustainability risk readable at a glance",
      "Built a fully typed TypeScript codebase with reusable analytics components",
      "Deployed as a fast, edge-hosted web application",
    ],
    stack: [
      { label: "React", color: "#53C1DE" },
      { label: "TypeScript", color: "#3178C6" },
      { label: "Tailwind CSS", color: "#38BDF8" },
      { label: "GitHub API", color: "#181717" },
      { label: "Vercel", color: "#121212" },
    ],
    github: "https://github.com/Snehasish-tech/OpenSource-Sustainability-Intelligence",
    live: "https://open-source-sustainability-intellig.vercel.app/",
  },
 
 
  {
    name: "Agri-Companion",
    tagline: "AI-Driven Smart Farming Platform",
    image: shot("https://agri-companion.vercel.app/"),
    logo: agriCompanionImg,
    desc: "Agri-Companion (KrishiGrowAI) is an AI-driven agricultural platform that gives farmers smart crop recommendations, live market intelligence and weather-aware guidance in one place.",
    points: [
      "Built a crop advisor that recommends crops from soil, season and regional data",
      "Integrated real-time weather insights for field-level decision making",
      "Added market price analysis so farmers can time their sales better",
      "Implemented an intelligent chatbot for instant farming support",
      "Shipped a farmer-friendly marketplace with a responsive, low-friction UI",
    ],
    stack: [
      { label: "React", color: "#53C1DE" },
      { label: "TypeScript", color: "#3178C6" },
      { label: "Tailwind CSS", color: "#38BDF8" },
      { label: "PostgreSQL", color: "#336791" },
      { label: "AI APIs", color: "#8A5CF5" },
    ],
    github: "https://github.com/Snehasish-tech/Agri-Companion",
    live: "https://agri-companion.vercel.app/",
  },
 
   {
    name: "ChhatroBondhu 2.0",
    tagline: "AI-Powered Student Assistance Platform",
    image: shot("https://chhatrobondhu-20.vercel.app/"),
    logo: ChhatroBondhuImg,
    desc: "ChhatroBondhu is an AI-powered study companion that helps students find notes, track progress and stay motivated through gamification and collaborative learning tools.",
    points: [
      "Developed an AI-powered student assistance platform with personalised course recommendations",
      "Implemented intelligent note search with an advanced filtering system",
      "Added gamification and collaboration features to boost consistent study habits",
      "Built interactive UI components for a smoother learning experience",
      "Persisted user data and academic records with PostgreSQL",
    ],
    stack: [
      { label: "React", color: "#53C1DE" },
      { label: "TypeScript", color: "#3178C6" },
      { label: "Tailwind CSS", color: "#38BDF8" },
      { label: "PostgreSQL", color: "#336791" },
      { label: "Supabase", color: "#34B27B" },
    ],
    github: "https://github.com/Snehasish-tech/ChhatroBondhu-2.0",
    live: "https://chhatrobondhu-20.vercel.app/",
  },

  
];

export type Experience = {
  period: string;
  role: string;
  org: string;
  desc: string;
  icon: "code" | "users" | "globe" | "award";
};

export const experiences: Experience[] = [
  {
    period: "2024 – 2028",
    role: "B.Tech, Information Technology · CGPA 8.67",
    org: "Narula Institute of Technology, Agarpara",
    desc: "Pursuing Information Technology with a strong academic record while building web applications, practising DSA and exploring application security.",
    icon: "award",
  },
  {
    period: "2025",
    role: "Smart India Hackathon 2025 — Internal Round",
    org: "Narula Institute of Technology",
    desc: "Qualified through the institute-level selection process and represented the college team for Smart India Hackathon 2025.",
    icon: "users",
  },
  {
    period: "2026",
    role: "Open Source Contributor — ECWoC",
    org: "Elite Coders Winter of Code",
    desc: "Contributed to the open-source developer community among 5000+ participants, working on issues, reviews and documentation across projects.",
    icon: "globe",
  },
  {
    period: "Mar 2026",
    role: "Python with Django Trainee",
    org: "Genex Engineering & Management Solutions",
    desc: "Completed a 30-hour certified training programme on Python with Django, covering backend development concepts and web application fundamentals.",
    icon: "code",
  },
];

export type Certificate = {
  title: string;
  date: string;
  desc: string;
  image: string;
  imageAlt?: string;
  asset?: string;
  ribbon: string;
  category: "Hackathon" | "Skills" | "Extracurricular";
};

export const certificates: Certificate[] = [
 {
    title: "Hack&Verse Hackathon 2026 — GDG on Campus, SATI Vidisha",
    date: "2026",
    desc: "Secured 3rd position by building an innovative solution during the hackathon.",
    image: hackverseImg,
    imageAlt: "Hack&Verse Hackathon certificate",
    ribbon: "3rd",
    category: "Hackathon",
},
  {
    title: "Smart India Hackathon 2025 — Internal College Round",
    date: "2025",
    desc: "Qualified through the institute-level selection process and represented the college team for SIH 2025.",
    image: SIHImg,
    imageAlt: "Smart India Hackathon certificate",
  
    ribbon: "Selected",
    category: "Hackathon",
  },
  {
    title: "Python with Django Training Certification",
    date: "Mar 2026",
    desc: "30-hour training programme by Genex Engineering & Management Solutions on Django backend development.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Python with Django training certificate",
    asset: "src/assets/certificates/django-training.jpg",
    ribbon: "Certified",
    category: "Skills",
  },
  {
    title: "Elite Coders Winter of Code (ECWoC)",
    date: "2026",
    desc: "Open-source contributor among 5000+ participants, contributing to community-driven repositories.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Elite Coders Winter of Code certificate",
    asset: "src/assets/certificates/ecwoc-2026.jpg",
    ribbon: "Contributor",
    category: "Extracurricular",
  },
  {
    title: "New Hackathon Win 1",
    date: "YYYY",
    desc: "Description of the hackathon achievement.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "New Hackathon certificate",
    asset: "src/assets/certificates/new-hackathon-1.jpg",
    ribbon: "Winner",
    category: "Hackathon",
  },
  {
    title: "New Hackathon Win 2",
    date: "YYYY",
    desc: "Description of the hackathon achievement.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "New Hackathon certificate",
    asset: "src/assets/certificates/new-hackathon-2.jpg",
    ribbon: "Finalist",
    category: "Hackathon",
  },
  {
    title: "New Hackathon Win 3",
    date: "YYYY",
    desc: "Description of the hackathon achievement.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "New Hackathon certificate",
    asset: "src/assets/certificates/new-hackathon-3.jpg",
    ribbon: "Participant",
    category: "Hackathon",
  },
  {
    title: "New Skill Certification 1",
    date: "Mon YYYY",
    desc: "Description of the skill certification.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "New skill certificate",
    asset: "src/assets/certificates/new-skill-1.jpg",
    ribbon: "Certified",
    category: "Skills",
  },
  {
    title: "New Skill Certification 2",
    date: "Mon YYYY",
    desc: "Description of the skill certification.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "New skill certificate",
    asset: "src/assets/certificates/new-skill-2.jpg",
    ribbon: "Certified",
    category: "Skills",
  },
  {
    title: "New Extracurricular Activity 1",
    date: "YYYY",
    desc: "Description of the extracurricular activity.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "New extracurricular certificate",
    asset: "src/assets/certificates/new-extracurricular-1.jpg",
    ribbon: "Member",
    category: "Extracurricular",
  },
  {
    title: "New Extracurricular Activity 2",
    date: "YYYY",
    desc: "Description of the extracurricular activity.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "New extracurricular certificate",
    asset: "src/assets/certificates/new-extracurricular-2.jpg",
    ribbon: "Volunteer",
    category: "Extracurricular",
  },
  {
    title: "New Extracurricular Activity 3",
    date: "YYYY",
    desc: "Description of the extracurricular activity.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "New extracurricular certificate",
    asset: "src/assets/certificates/new-extracurricular-3.jpg",
    ribbon: "Coordinator",
    category: "Extracurricular",
  },
];

export const testimonials = [
  {
    name: "Ananyo Dasgupta",
    role: "SENIOR & HACKATHON PARTNER",
    avatar: "https://i.pravatar.cc/150?u=ananyo",
    quote:
      "Snehasish is a disciplined, reliable developer who moves from idea to implementation quickly, backed by a rare ability to dissect complex logic manually.",
    tag: "STUDENT",
  },
  {
    name: "Piyush Kumar",
    role: "FRIEND / HACKATHON TEAMMATE",
    avatar: "https://i.pravatar.cc/150?u=piyush",
    quote:
      "Loved working with Snehasish! Truly an all-rounder who thrives in a collaborative environment and brings out the best in each of his teammates.",
    tag: "STUDENT",
  },
  {
    name: "Sahil Kumar",
    role: "SENIOR & HACKATHON TEAMMATE",
    avatar: "https://i.pravatar.cc/150?u=sahil",
    quote:
      "He has in-depth knowledge across many technologies, and even in areas he isn't familiar with, he knows how to figure things out and get the work done.",
    tag: "STUDENT",
  },
  {
    name: "Soumyadip Roy",
    role: "SENIOR & HACKATHON PARTNER",
    avatar: "https://i.pravatar.cc/150?u=soumyadip",
    quote:
      "Snehasish is a genuinely talented developer who contributes sincerely to any team and brings positive energy to finish projects before deadlines.",
    tag: "STUDENT",
  },
  {
    name: "Amit Verma",
    role: "PROJECT PARTNER",
    avatar: "https://i.pravatar.cc/150?u=amit",
    quote:
      "He has a great sense of UI and interaction design. His projects aren't just functional — they feel modern and well-crafted.",
    tag: "PARTNER",
  },
  {
    name: "Arijit Sen",
    role: "SENIOR",
    avatar: "https://i.pravatar.cc/150?u=arijit",
    quote:
      "A strong problem-solving mindset and genuine curiosity for learning. He consistently took ownership of challenging tasks.",
    tag: "SENIOR",
  },
  {
    name: "Rohit Sharma",
    role: "HACKATHON TEAMMATE",
    avatar: "https://i.pravatar.cc/150?u=rohit",
    quote:
      "Working with Snehasish during the hackathon was a great experience. His ability to stay calm under pressure helped our team a lot.",
    tag: "TEAMMATE",
  },
  {
    name: "Priyanka Mukherjee",
    role: "SENIOR",
    avatar: "https://i.pravatar.cc/150?u=priyanka",
    quote:
      "Extremely consistent and disciplined in his work. His attention to detail makes his projects feel polished and professional.",
    tag: "SENIOR",
  },
];

/* ---------------- Education & Qualifications ---------------- */
export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  status: "Completed" | "In Progress";
  desc: string;
  coursework: string[];
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech — Information Technology",
    institution: "Narula Institute of Technology",
    location: "Agarpara, Kolkata",
    period: "2024 — 2028",
    grade: "8.67 / 10 CGPA",
    status: "In Progress",
    desc: "Core computer-science foundations paired with hands-on product building, hackathons and open-source contribution.",
    coursework: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOP",
      "Web Technologies",
    ],
  },
  {
    degree: "Higher Secondary (WBCHSE) — Science",
    institution: "Digha Vidyabhawan High School",
    location: "West Bengal",
    period: "2022 — 2024",
    grade: "Science (PCMB) — 80.2%",
    status: "Completed",
    desc: "Studied Physics, Chemistry, Mathematics",
    coursework: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    degree: "Secondary (WBBSE)",
    institution: "Digha Vidyabhawan High School",
    location: "West Bengal",
    period: "2021 — 2022",
    grade: "90.06 %",
    status: "Completed",
    desc: "Built strong fundamentals across mathematics and science alongside consistent extracurricular participation.",
    coursework: ["Mathematics", "Science", "English", "Computer Applications"],
  },
];

/* ---------------- Badges ---------------- */
export const badges = [
  { label: "SIH 2025 Finalist (Internal)", issuer: "Smart India Hackathon", tone: "Hackathon" },
  { label: "Hack&Verse 2026 — 3rd Place", issuer: "GDG on Campus, SATI", tone: "Hackathon" },
  { label: "ECWoC Open-Source Contributor", issuer: "Elite Coders Winter of Code", tone: "Community" },
  { label: "Python + Django (30h)", issuer: "Genex Engineering", tone: "Training" },
  { label: "100+ DSA Problems", issuer: "LeetCode · GfG", tone: "Practice" },
  { label: "3★ Problem Solver", issuer: "CodeChef", tone: "Practice" },
];

/* ---------------- Resume ---------------- */
export const resume = {
  href: "https://github.com/Snehasish-tech/Resume/blob/main/Snehasish_Dey_Resume.pdf",
  pdf: "src/assets/resume/Snehasish-Resume.pdf",
  updated: "Updated Aug 2026",
  highlights: [
    "3rd-year B.Tech IT · CGPA 8.67",
    "Full-stack projects shipped to production",
    "Open-source contributor & hackathon finalist",
  ],
};
