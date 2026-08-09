import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, r as performance_default, t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as ChevronRight, B as ArrowRight, C as Eye, D as Cloud, E as CodeXml, F as Briefcase, I as Brain, L as BadgeCheck, M as ChevronDown, N as Calendar, O as Clock, P as CalendarDays, R as Award, S as FileText, T as Database, V as Activity, _ as Layers, a as Trophy, b as Globe, c as Server, d as MonitorSmartphone, f as Menu, g as Linkedin, h as Mail, i as Users, j as ChevronLeft, k as CircleCheck, l as Rocket, m as MapPin, n as X, o as Star, p as Medal, r as Wrench, s as Sparkles, t as Zap, u as Palette, v as Grid3x3, w as Download, x as Github, y as GraduationCap, z as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B0Enk7ZD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Snehasish_default = "/assets/Snehasish-BQRSL_Ex.jpeg";
var agri_companion_default = "/assets/agri-companion-DYDByVuS.jpg";
var ChhatroBondhu_default = "/assets/ChhatroBondhu-f1VLWV5b.jpg";
var OSSI_default = "/assets/OSSI-DZpyclXs.png";
var hackverse_2026_default = "/assets/hackverse-2026-DqcwfD7o.jpg";
var SIH_default = "/assets/SIH-C9o4FY4S.jpg";
var TMNT_default = "/assets/TMNT-CoXLJkMf.jpg";
var GDG_default = "/assets/GDG-B82PvfIH.jpeg";
var JISU_default = "/assets/JISU-DOGpVk3E.jpg";
var NPTEL_default = "/assets/NPTEL-BPaV8Llw.jpg";
var Django_default = "/assets/Django-BG8k_5Hm.jpg";
var Open_Source_default = "/assets/Open_Source-CJ0uy0WQ.jpg";
var EliteCoder_default = "/assets/EliteCoder-BqSiU8HT.jpg";
var ServiceNow_default = "/assets/ServiceNow-DCJNRNnH.jpg";
var RESUME_default = "/assets/RESUME-BbZOBQMi.pdf";
var shot = (url) => `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
var profile = {
	name: "Snehasish Dey",
	firstName: "Snehasish",
	role: "Full Stack Web Developer",
	email: "snehasishdey02@gmail.com",
	location: "Kolkata · West Bengal, India",
	avatar: Snehasish_default,
	octocat: "https://bikram-dot-dev.vercel.app/octocat.png",
	intro: ", 3rd year B.Tech Information Technology student who loves turning ideas into working products. Frontend developer exploring backend, learning by building — programming isn't just my course, it's my craft."
};
var socials = [
	{
		label: "GitHub",
		icon: Github,
		href: "https://github.com/Snehasish-tech"
	},
	{
		label: "LinkedIn",
		icon: Linkedin,
		href: "https://www.linkedin.com/in/snehasish-dey"
	},
	{
		label: "LeetCode",
		icon: CodeXml,
		href: "https://leetcode.com/u/snehasishdey02"
	},
	{
		label: "Email",
		icon: Mail,
		href: "mailto:snehasishdey02@gmail.com"
	},
	{
		label: "Resume",
		icon: FileText,
		href: "https://github.com/Snehasish-tech/Resume/blob/main/Snehasish_Dey_Resume.pdf"
	}
];
var navLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Tech",
		href: "#tech"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "GitHub",
		href: "#github"
	},
	{
		label: "Education",
		href: "#education"
	},
	{
		label: "Certificates",
		href: "#certificates"
	},
	{
		label: "Resume",
		href: "#resume"
	}
];
var miniProjects = [
	{
		title: "ChhatroBondhu 2.0",
		desc: "AI-powered study companion with gamification, smart note search and collaboration features for students.",
		tags: [
			"React",
			"TypeScript",
			"PostgreSQL"
		]
	},
	{
		title: "Agri-Companion",
		desc: "Smart farming platform with AI crop advisor, live market prices, weather insights and a farmer marketplace.",
		tags: [
			"TypeScript",
			"AI",
			"Supabase"
		]
	},
	{
		title: "OSSI - Open Source Sustainability Intelligence",
		desc: "A human-centric platform to assess open-source project health, maintainer workload and sustainability risk.",
		tags: [
			"TypeScript",
			"Next.js",
			"Data Viz"
		]
	}
];
var techSlugs = {
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
	Figma: "figma"
};
var techGroups = [
	{
		group: "Languages",
		note: "Core languages I use for problem solving, DSA practice and application development.",
		items: [
			"C",
			"Java",
			"Python",
			"JavaScript",
			"TypeScript",
			"SQL"
		]
	},
	{
		group: "Frontend",
		note: "Building accessible, responsive interfaces with a component-driven workflow.",
		items: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"HTML5",
			"CSS3",
			"Vite"
		]
	},
	{
		group: "Backend",
		note: "Server-side APIs, authentication and business logic — the layer I'm actively deepening.",
		items: [
			"Node.js",
			"Express.js",
			"Django",
			"REST APIs"
		]
	},
	{
		group: "Database",
		note: "Modelling and querying relational and document data for production apps.",
		items: [
			"PostgreSQL",
			"Supabase",
			"MySQL"
		]
	},
	{
		group: "Tools",
		note: "Everyday tooling for version control, testing, deployment and design handoff.",
		items: [
			"Git",
			"GitHub",
			"VS Code",
			"Vercel",
			"Figma"
		]
	}
];
var learning = [
	"System Design",
	"AI Integrations",
	"Machine Learning"
];
var projects = [
	{
		name: "OSSI- Open Source Sustainability Intelligence",
		tagline: "Open-Source Health & Risk Analytics",
		image: shot("https://open-source-sustainability-intellig.vercel.app/"),
		logo: OSSI_default,
		desc: "A human-centric platform that assesses open-source project health, maintainer workload, sustainability risk and trust — so communities and companies can act before projects burn out.",
		points: [
			"Aggregated repository activity signals into a single project health score",
			"Modelled maintainer workload to surface burnout and bus-factor risk early",
			"Designed data visualisations that make sustainability risk readable at a glance",
			"Built a fully typed TypeScript codebase with reusable analytics components",
			"Deployed as a fast, edge-hosted web application"
		],
		stack: [
			{
				label: "React",
				color: "#53C1DE"
			},
			{
				label: "TypeScript",
				color: "#3178C6"
			},
			{
				label: "Tailwind CSS",
				color: "#38BDF8"
			},
			{
				label: "GitHub API",
				color: "#181717"
			},
			{
				label: "Vercel",
				color: "#121212"
			}
		],
		github: "https://github.com/Snehasish-tech/OpenSource-Sustainability-Intelligence",
		live: "https://open-source-sustainability-intellig.vercel.app/"
	},
	{
		name: "Agri-Companion",
		tagline: "AI-Driven Smart Farming Platform",
		image: shot("https://agri-companion.vercel.app/"),
		logo: agri_companion_default,
		desc: "Agri-Companion (KrishiGrowAI) is an AI-driven agricultural platform that gives farmers smart crop recommendations, live market intelligence and weather-aware guidance in one place.",
		points: [
			"Built a crop advisor that recommends crops from soil, season and regional data",
			"Integrated real-time weather insights for field-level decision making",
			"Added market price analysis so farmers can time their sales better",
			"Implemented an intelligent chatbot for instant farming support",
			"Shipped a farmer-friendly marketplace with a responsive, low-friction UI"
		],
		stack: [
			{
				label: "React",
				color: "#53C1DE"
			},
			{
				label: "TypeScript",
				color: "#3178C6"
			},
			{
				label: "Tailwind CSS",
				color: "#38BDF8"
			},
			{
				label: "PostgreSQL",
				color: "#336791"
			},
			{
				label: "AI APIs",
				color: "#8A5CF5"
			}
		],
		github: "https://github.com/Snehasish-tech/Agri-Companion",
		live: "https://agri-companion.vercel.app/"
	},
	{
		name: "ChhatroBondhu 2.0",
		tagline: "AI-Powered Student Assistance Platform",
		image: shot("https://chhatrobondhu-20.vercel.app/"),
		logo: ChhatroBondhu_default,
		desc: "ChhatroBondhu is an AI-powered study companion that helps students find notes, track progress and stay motivated through gamification and collaborative learning tools.",
		points: [
			"Developed an AI-powered student assistance platform with personalised course recommendations",
			"Implemented intelligent note search with an advanced filtering system",
			"Added gamification and collaboration features to boost consistent study habits",
			"Built interactive UI components for a smoother learning experience",
			"Persisted user data and academic records with PostgreSQL"
		],
		stack: [
			{
				label: "React",
				color: "#53C1DE"
			},
			{
				label: "TypeScript",
				color: "#3178C6"
			},
			{
				label: "Tailwind CSS",
				color: "#38BDF8"
			},
			{
				label: "PostgreSQL",
				color: "#336791"
			},
			{
				label: "Supabase",
				color: "#34B27B"
			}
		],
		github: "https://github.com/Snehasish-tech/ChhatroBondhu-2.0",
		live: "https://chhatrobondhu-20.vercel.app/"
	}
];
var experiences = [{
	period: "Jul 2026",
	role: "ServiceNow Virtual Intern",
	org: "ServiceNow University (AICTE & SmartBridge)",
	desc: "Successfully completed hands-on training modules including Agentic AI, Flow Designer, Automated Test Framework (ATF), and CSA exam preparation.",
	icon: "trophy"
}, {
	period: "Jan 2026 – Feb 2026",
	role: "Open Source Contributor — ECWoC",
	org: "Elite Coders Winter of Code",
	desc: "Contributed to the open-source developer community among 5000+ participants, working on issues, reviews, and documentation across projects.",
	icon: "github"
}];
var certificates = [
	{
		title: "Hack&Verse Hackathon 2026 — GDG on Campus, SATI Vidisha",
		date: "2026",
		desc: "Secured 3rd position by building an innovative solution during the hackathon.",
		image: hackverse_2026_default,
		imageAlt: "Hack&Verse Hackathon certificate",
		ribbon: "3rd",
		category: "Hackathon"
	},
	{
		title: "Smart India Hackathon 2025 — Internal College Round",
		date: "2025",
		desc: "Qualified through the institute-level selection process and represented the college team for SIH 2025.",
		image: SIH_default,
		imageAlt: "Smart India Hackathon certificate",
		ribbon: "Selected",
		category: "Hackathon"
	},
	{
		title: "Python with Django Training Certification",
		date: "Mar 2026",
		desc: "30-hour training programme by Genex Engineering & Management Solutions on Django backend development.",
		image: TMNT_default,
		imageAlt: "Python with Django training certificate",
		asset: "src/assets/certificates/django-training.jpg",
		ribbon: "Certified",
		category: "Hackathon"
	},
	{
		title: "Elite Coders Winter of Code (ECWoC)",
		date: "2026",
		desc: "Open-source contributor among 5000+ participants, contributing to community-driven repositories.",
		image: EliteCoder_default,
		imageAlt: "Elite Coders Winter of Code certificate",
		asset: "src/assets/certificates/ecwoc-2026.jpg",
		ribbon: "Contributor",
		category: "Extracurricular"
	},
	{
		title: "Solution Challenge 2026: Build with AI",
		date: "Jul 2026",
		desc: "Recognized for successful prototype submission and contribution to the spirit of innovation and problem-solving.",
		image: GDG_default,
		imageAlt: "Solution Challenge 2026 Build with AI certificate",
		ribbon: "Participant",
		category: "Hackathon"
	},
	{
		title: "Techsprint Hackathon — GDG on Campus, JIS University",
		date: "Jan 2026",
		desc: "Participated in the first Techsprint Hackathon powered by Google Developer Groups on Campus JIS University.",
		image: JISU_default,
		imageAlt: "Techsprint Hackathon JIS University certificate",
		asset: "src/assets/certificates/new-hackathon-3.jpg",
		ribbon: "Participant",
		category: "Hackathon"
	},
	{
		title: "Programming in Java — NPTEL Online Certification",
		date: "Jan-Apr 2026",
		desc: "Successfully completed a 12-week course by IIT Kharagpur, funded by the MoE, Govt. of India.",
		image: NPTEL_default,
		imageAlt: "NPTEL Java Certification",
		asset: "src/assets/certificates/new-skill-1.jpg",
		ribbon: "Certified",
		category: "Skills"
	},
	{
		title: "Python with Django Certificate of Completion",
		date: "Mar 2026",
		desc: "Successfully completed a 30-hour training on Python with Django from Genex Engineering & Management Solutions.",
		image: Django_default,
		imageAlt: "Python with Django completion certificate",
		asset: "src/assets/certificates/new-skill-2.jpg",
		ribbon: "Certified",
		category: "Skills"
	},
	{
		title: "Open Source Connect Global 2026",
		date: "Mar 2026",
		desc: "Active participation in the technical workshop on AI-Driven Systems for Open Source Collaboration and Development.",
		image: Open_Source_default,
		imageAlt: "Open Source Connect Global certificate",
		asset: "src/assets/certificates/new-extracurricular-1.jpg",
		ribbon: "Member",
		category: "Extracurricular"
	},
	{
		title: "ServiceNow Virtual Internship Program",
		date: "Jul 2026",
		desc: "Successfully completed the Virtual Internship Program by ServiceNow University in collaboration with AICTE and SmartBridge.",
		image: ServiceNow_default,
		imageAlt: "ServiceNow Virtual Internship certificate",
		asset: "src/assets/certificates/new-extracurricular-3.jpg",
		ribbon: "Coordinator",
		category: "Extracurricular"
	}
];
var education = [
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
			"Web Technologies"
		]
	},
	{
		degree: "Higher Secondary (WBCHSE) — Science",
		institution: "Digha Vidyabhawan High School",
		location: "West Bengal",
		period: "2022 — 2024",
		grade: "Science (PCMB) — 80.1%",
		status: "Completed",
		desc: "Studied Physics, Chemistry, Mathematics",
		coursework: [
			"Mathematics",
			"Physics",
			"Chemistry"
		]
	},
	{
		degree: "Secondary (WBBSE)",
		institution: "Digha Vidyabhawan High School",
		location: "West Bengal",
		period: "2021 — 2022",
		grade: "90.85 %",
		status: "Completed",
		desc: "Built strong fundamentals across mathematics and science alongside consistent extracurricular participation.",
		coursework: [
			"Mathematics",
			"Science",
			"English",
			"Computer Applications"
		]
	}
];
var resume = {
	href: RESUME_default,
	pdf: RESUME_default,
	updated: "Updated Aug 2026",
	highlights: [
		"3rd-year B.Tech IT · CGPA 8.67",
		"Full-stack projects shipped to production",
		"Open-source contributor & hackathon finalist"
	]
};
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-8 w-8 text-lime",
		fill: "none",
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "50",
				rx: "46",
				ry: "20",
				strokeWidth: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "50",
				rx: "46",
				ry: "20",
				strokeWidth: "6",
				transform: "rotate(60 50 50)",
				opacity: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "50",
				rx: "46",
				ry: "20",
				strokeWidth: "6",
				transform: "rotate(120 50 50)",
				opacity: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "8",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl font-bold",
						children: profile.firstName
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-0.5 xl:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-full px-2.5 py-2 text-[13px] text-foreground/80 transition-colors duration-200 hover:text-lime",
						children: l.label
					}) }, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#connect",
						className: "hidden rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105 sm:inline-block",
						children: "Connect With Me"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "rounded-md p-2 text-foreground xl:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			className: "overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-1 px-5 py-4",
				children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "block rounded-lg px-3 py-2.5 text-foreground/85 hover:bg-secondary hover:text-lime",
					children: l.label
				}) }, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#connect",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-full bg-lime px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground",
					children: "Connect With Me"
				})]
			})
		}) })]
	});
}
/**
* Premium Animated 3D Wireframe Terrain for Portfolio Hero Section.
* Features rolling, ocean-like aesthetic waves flowing top-to-bottom.
* Custom color palette matched exactly to the Neon Green dark theme.
*/
function HeroTerrain({ className }) {
	const mountRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const mount = mountRef.current;
		if (!mount) return;
		let disposed = false;
		let cleanup;
		(async () => {
			const THREE = await import("../_libs/three.mjs").then((n) => n.t);
			if (disposed || !mount) return;
			const w = mount.clientWidth || window.innerWidth;
			const h = mount.clientHeight || window.innerHeight;
			const BG_COLOR = 329477;
			const BASE_COLOR = new THREE.Color(862989);
			const PEAK_COLOR = new THREE.Color(7274240);
			const FOG_DENSITY = .015;
			const scene = new THREE.Scene();
			scene.fog = new THREE.FogExp2(BG_COLOR, FOG_DENSITY);
			const camera = new THREE.PerspectiveCamera(60, w / h, .1, 200);
			camera.position.set(0, 5.5, 14);
			camera.lookAt(0, -1.5, -10);
			const renderer = new THREE.WebGLRenderer({
				alpha: true,
				antialias: true
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(w, h, false);
			renderer.domElement.style.width = "100%";
			renderer.domElement.style.height = "100%";
			renderer.domElement.style.display = "block";
			mount.appendChild(renderer.domElement);
			const SIZE = 110;
			const SEG = 130;
			const geometry = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
			geometry.rotateX(-Math.PI / 2);
			const material = new THREE.ShaderMaterial({
				uniforms: {
					uTime: { value: 0 },
					uOpacity: { value: 0 },
					uBaseColor: { value: BASE_COLOR },
					uPeakColor: { value: PEAK_COLOR },
					uFogColor: { value: new THREE.Color(BG_COLOR) },
					uFogDensity: { value: FOG_DENSITY }
				},
				vertexShader: `
          uniform float uTime;
          varying float vElevation;
          varying float vFogDepth;
          varying vec2 vPosXZ;

          void main() {
            vec3 pos = position;
            float time = uTime * 0.45;

            // Organic, rolling ocean wave math
            float wave1 = sin(pos.z * 0.12 - time * 1.8) * 1.6;
            float wave2 = sin(pos.x * 0.15 + pos.z * 0.05 + time * 1.2) * 0.9;
            float wave3 = sin(pos.x * 0.25 - pos.z * 0.1 - time * 0.8) * 0.4;
            
            float elevation = wave1 + wave2 + wave3;

            pos.y = elevation;
            vElevation = elevation;
            vPosXZ = pos.xz; 

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            vFogDepth = -mvPosition.z;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
				fragmentShader: `
          uniform float uOpacity;
          uniform vec3 uBaseColor;
          uniform vec3 uPeakColor;
          uniform vec3 uFogColor;
          uniform float uFogDensity;
          
          varying float vElevation;
          varying float vFogDepth;
          varying vec2 vPosXZ;

          void main() {
            // High contrast smoothstep for glowing green peaks
            float highlight = smoothstep(-0.5, 2.5, vElevation);
            vec3 color = mix(uBaseColor, uPeakColor, highlight);

            // Fog falloff
            float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
            color = mix(color, uFogColor, fogFactor);

            // Premium Vignette/Edge Fade
            float distFromCenter = length(vPosXZ);
            float edgeFade = smoothstep(55.0, 15.0, distFromCenter);

            float finalOpacity = uOpacity * (1.0 - fogFactor * 0.4) * edgeFade;

            gl_FragColor = vec4(color, finalOpacity);
          }
        `,
				wireframe: true,
				transparent: true
			});
			const terrain = new THREE.Mesh(geometry, material);
			terrain.position.z = -12;
			scene.add(terrain);
			let visible = true;
			const io = new IntersectionObserver(([entry]) => {
				visible = entry.isIntersecting;
			}, { threshold: 0 });
			io.observe(mount);
			let raf = 0;
			const start = performance_default.now();
			const FADE_IN_MS = 2e3;
			const render = () => {
				raf = requestAnimationFrame(render);
				if (!visible) return;
				const elapsed = performance_default.now() - start;
				material.uniforms.uTime.value = elapsed / 1e3;
				const fadeT = Math.min(elapsed / FADE_IN_MS, 1);
				material.uniforms.uOpacity.value = .9 * (1 - Math.pow(1 - fadeT, 3));
				renderer.render(scene, camera);
			};
			render();
			const onResize = () => {
				const nw = mount.clientWidth || window.innerWidth;
				const nh = mount.clientHeight || window.innerHeight;
				renderer.setSize(nw, nh, false);
				camera.aspect = nw / nh;
				camera.updateProjectionMatrix();
			};
			const ro = new ResizeObserver(onResize);
			ro.observe(mount);
			cleanup = () => {
				cancelAnimationFrame(raf);
				ro.disconnect();
				io.disconnect();
				geometry.dispose();
				material.dispose();
				renderer.dispose();
				if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
			};
		})();
		return () => {
			disposed = true;
			cleanup?.();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mountRef,
		className: className ?? "absolute inset-0 -z-10 pointer-events-none",
		style: { background: "#050705" },
		"aria-hidden": "true"
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-screen overflow-hidden pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-gradient" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 hero-stars opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[70%] hero-aurora" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-[14%] top-[24%] h-2 w-2 rounded-full bg-lime/70 blur-[1px]",
				animate: {
					y: [
						0,
						-26,
						0
					],
					opacity: [
						.3,
						1,
						.3
					]
				},
				transition: {
					duration: 7,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				className: "pointer-events-none absolute right-[18%] top-[34%] h-1.5 w-1.5 rounded-full bg-lime/60 blur-[1px]",
				animate: {
					y: [
						0,
						22,
						0
					],
					opacity: [
						.25,
						.9,
						.25
					]
				},
				transition: {
					duration: 9,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1.2
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-[70%] top-[18%] h-1 w-1 rounded-full bg-lime/70",
				animate: {
					y: [
						0,
						-18,
						0
					],
					opacity: [
						.2,
						.8,
						.2
					]
				},
				transition: {
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
					delay: .6
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroTerrain, { className: "absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/80 via-background/25 to-background/85" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .2
						},
						className: "flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-sm text-lime",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), "About Me"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 26
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .32,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl",
						children: ["Hi, I’m ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lime text-glow",
							children: profile.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .46
						},
						className: "mt-7 max-w-3xl text-xl leading-relaxed text-foreground/90 md:text-[26px]",
						children: [
							"A",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-1 inline-block rounded-lg bg-lime px-3 py-1 align-middle text-[0.85em] font-semibold text-primary-foreground",
								children: profile.role
							}),
							" ",
							profile.intro
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .6
						},
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": s.label,
							className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary/60 text-foreground/80 transition-all duration-200 hover:-translate-y-1 hover:border-lime/60 hover:text-lime",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-[18px] w-[18px]" })
						}, s.label))
					})
				]
			})
		]
	});
}
function SectionBadge({ icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { duration: .5 },
		className: "mx-auto flex w-fit items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-sm text-lime",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function SectionHeading({ lead, accent, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay: .05
		},
		className: "mt-6 text-center text-4xl font-bold sm:text-5xl md:text-6xl",
		children: [
			lead,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-lime",
				children: accent
			})
		]
	}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay: .12
		},
		className: "mx-auto mt-5 max-w-2xl text-center text-base text-muted-foreground",
		children: sub
	})] });
}
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
var earth_texture_default = "/assets/earth-texture-YE3PBysf.jpg";
function Earth3D({ className }) {
	const mountRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const mount = mountRef.current;
		if (!mount) return;
		let disposed = false;
		let cleanup;
		(async () => {
			const THREE = await import("../_libs/three.mjs").then((n) => n.t);
			if (disposed || !mount) return;
			const size = Math.min(mount.clientWidth, mount.clientHeight) || 280;
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
			camera.position.z = 3.1;
			const renderer = new THREE.WebGLRenderer({
				alpha: true,
				antialias: true
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(size, size, false);
			renderer.domElement.style.width = "100%";
			renderer.domElement.style.height = "100%";
			mount.appendChild(renderer.domElement);
			const map = new THREE.TextureLoader().load(earth_texture_default);
			map.colorSpace = THREE.SRGBColorSpace;
			map.anisotropy = 8;
			const globe = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshStandardMaterial({
				map,
				roughness: .85,
				metalness: .05
			}));
			globe.rotation.z = .35;
			scene.add(globe);
			const cage = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.SphereGeometry(1.015, 24, 16)), new THREE.LineBasicMaterial({
				color: 10741301,
				transparent: true,
				opacity: .14
			}));
			globe.add(cage);
			const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.16, 48, 48), new THREE.ShaderMaterial({
				transparent: true,
				side: THREE.BackSide,
				blending: THREE.AdditiveBlending,
				uniforms: { uColor: { value: new THREE.Color(10741301) } },
				vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
				fragmentShader: `
            varying vec3 vNormal;
            uniform vec3 uColor;
            void main() {
              float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
              gl_FragColor = vec4(uColor, 1.0) * intensity;
            }
          `
			}));
			scene.add(atmosphere);
			scene.add(new THREE.AmbientLight(16777215, .75));
			const key = new THREE.DirectionalLight(14285213, 2.1);
			key.position.set(3, 2, 3);
			scene.add(key);
			const rim = new THREE.DirectionalLight(8702998, 1.2);
			rim.position.set(-3, -1, -2);
			scene.add(rim);
			let raf = 0;
			const render = () => {
				globe.rotation.y += .0022;
				renderer.render(scene, camera);
				raf = requestAnimationFrame(render);
			};
			render();
			const onResize = () => {
				const s = Math.min(mount.clientWidth, mount.clientHeight) || size;
				renderer.setSize(s, s, false);
				camera.updateProjectionMatrix();
			};
			const ro = new ResizeObserver(onResize);
			ro.observe(mount);
			cleanup = () => {
				cancelAnimationFrame(raf);
				ro.disconnect();
				renderer.dispose();
				map.dispose();
				globe.geometry.dispose();
				globe.material.dispose();
				if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
			};
		})();
		return () => {
			disposed = true;
			cleanup?.();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mountRef,
		className,
		"aria-hidden": "true"
	});
}
function Ideas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative overflow-hidden py-24 bg-black",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[120px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1280px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: Sparkles,
					children: "Building Intelligent Systems"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "Ideas",
					accent: "Into Reality",
					sub: "Crafting scalable AI tools, interactive web apps, and experimental digital systems where performance meets creativity."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid auto-rows-[minmax(220px,auto)] gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-2 xl:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 p-6 text-center transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[260px] sm:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-lime/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
											initial: {
												opacity: 0,
												scale: .95
											},
											whileInView: {
												opacity: 1,
												scale: 1
											},
											viewport: { once: true },
											transition: {
												duration: .7,
												ease: "easeOut"
											},
											className: "font-script text-6xl tracking-tight text-white sm:text-7xl md:text-8xl",
											children: "Welcome"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
											initial: { opacity: 0 },
											whileInView: { opacity: 1 },
											transition: { delay: .3 },
											className: "mt-3 font-display text-xl text-zinc-400 sm:text-3xl",
											children: ["to my ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lime font-medium drop-shadow-[0_0_10px_rgba(163,230,53,0.3)]",
												children: "Portfolio!"
											})]
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							className: "md:col-span-1 xl:col-span-1 xl:row-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 p-6 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-lime/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-1 items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
											whileHover: {
												y: -10,
												rotate: -5
											},
											transition: {
												type: "spring",
												stiffness: 200
											},
											src: profile.octocat,
											alt: "Developer mascot",
											loading: "lazy",
											className: "animate-float size-32 object-contain drop-shadow-xl transition-transform duration-500 sm:size-44"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative z-10 mt-6 border-t border-zinc-800/50 pt-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-zinc-900 border border-zinc-800 text-lime transition-transform group-hover:scale-110 group-hover:bg-lime/10 group-hover:border-lime/30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-6 w-6" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-semibold tracking-tight text-white",
												children: "Digital Innovations"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-zinc-400",
												children: "Full-stack expertise across the modern JS ecosystem."
											})] })]
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							className: "md:col-span-1 xl:col-span-1 xl:row-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 p-6 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[420px] sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-display text-lg leading-snug tracking-tight text-white",
											children: [
												"Highly adaptable ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-zinc-500",
													children: "across global timezones"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex shrink-0 items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-lime",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" }), "Live"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative my-6 grid flex-1 place-items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											animate: { y: [
												0,
												-8,
												0
											] },
											transition: {
												duration: 6,
												repeat: Infinity,
												ease: "easeInOut"
											},
											className: "relative size-[180px] sm:size-[220px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-4 rounded-full bg-lime/20 blur-2xl transition-opacity group-hover:opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth3D, { className: "relative h-full w-full transition-transform duration-700 group-hover:scale-110" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											animate: { rotate: 360 },
											transition: {
												duration: 40,
												repeat: Infinity,
												ease: "linear"
											},
											className: "pointer-events-none absolute size-[240px] rounded-full border border-zinc-800 sm:size-[280px]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-0 h-1 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_15px_var(--lime)]" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10 flex flex-col items-start gap-2 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 font-mono text-sm font-medium text-white",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-lime" }),
												" ",
												profile.location
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs font-semibold text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded-md",
											children: "UTC +05:30"
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							className: "md:col-span-1 xl:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative grid h-full min-h-[260px] place-items-center overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 p-6 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[300px] sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.05)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative size-48 sm:size-56",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										animate: { rotate: 360 },
										transition: {
											duration: 24,
											repeat: Infinity,
											ease: "linear"
										},
										className: "absolute inset-0 rounded-full border border-zinc-800 group-hover:border-zinc-700 transition-colors",
										children: [
											"⚛",
											"◆",
											"🐍",
											"TS",
											"▲"
										].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
											style: { transform: `rotate(${i * 72}deg)` },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-10 -translate-y-[96px] place-items-center rounded-full border border-zinc-700 bg-zinc-900 text-sm text-zinc-300 shadow-xl transition-all duration-300 hover:scale-125 hover:border-lime/50 hover:text-lime hover:bg-zinc-950 sm:-translate-y-[112px]",
												style: { transform: `rotate(-${i * 72}deg)` },
												children: t
											})
										}, i))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-[30%] grid place-items-center rounded-full border border-zinc-800 bg-zinc-900 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:border-lime/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: profile.octocat,
											alt: "Stack",
											className: "size-10 object-contain"
										})
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .25,
							className: "md:col-span-2 xl:col-start-2 xl:col-span-2 xl:row-start-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[340px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between px-6 pt-6 sm:px-8 sm:pt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-bold tracking-tight text-white",
										children: "Selected Works"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm text-zinc-400",
										children: "SaaS products, AI tools & full-stack builds"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#projects",
										className: "hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-lime/10 hover:border-lime/30 hover:text-lime sm:flex",
										children: ["View All ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-1 items-center overflow-x-auto overflow-y-hidden px-6 pb-6 pt-4 scrollbar-hide lg:overflow-hidden sm:px-8 sm:pb-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex w-max gap-4 lg:animate-marquee-left lg:will-change-transform lg:group-hover:[animation-play-state:paused]",
										children: [...miniProjects, ...miniProjects].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "w-[260px] shrink-0 snap-start rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:-translate-y-1 hover:border-lime/30 hover:bg-zinc-900 sm:w-[280px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center justify-between",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-10 w-10 place-items-center rounded-xl bg-zinc-800 border border-zinc-700 text-lime",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-5 w-5" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "mt-4 text-base font-semibold text-white",
													children: p.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400",
													children: p.desc
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 flex flex-wrap gap-2",
													children: p.tags.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-md bg-zinc-800/50 px-2 py-1 font-mono text-[11px] text-zinc-400",
														children: t
													}, t))
												})
											]
										}, i))
									})
								})]
							})
						})
					]
				})
			]
		})]
	});
}
var stats$1 = [
	{
		value: "3+",
		label: "Years building"
	},
	{
		value: "25+",
		label: "Projects shipped"
	},
	{
		value: "15+",
		label: "Technologies"
	}
];
var highlights = [
	{
		icon: CodeXml,
		title: "Full-stack craft",
		desc: "React, Next.js, Node.js & Python end to end."
	},
	{
		icon: Layers,
		title: "Scalable systems",
		desc: "Clean architecture, typed APIs, solid data models."
	},
	{
		icon: Rocket,
		title: "AI-first builds",
		desc: "LLM tooling and automation baked into products."
	}
];
function Overview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "overview",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: Zap,
					children: "Introduction"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "Hey! It's Me",
					accent: profile.firstName,
					sub: "A full-stack developer passionate about AI, scalable architecture, and crafting interactive digital experiences."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-lime/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase tracking-[0.3em] text-lime",
								children: "Overview"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-5 text-5xl font-bold leading-[1.05] sm:text-6xl",
							children: [
								"Building the web,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lime text-glow",
									children: "one system at a time."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-lg leading-relaxed text-muted-foreground",
							children: [
								"I’m a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Full-stack Web developer"
								}),
								" with experience in",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Python, Javascript & TypeScript, Tailwind CSS"
								}),
								", and expertise in frameworks like",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "React.js, Next.js, Node.js, and database systems"
								}),
								". I love to explore new technologies to refine my skills and contribute to interactive projects — building efficient, scalable, and user-friendly solutions that solve real-world problems."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-3 sm:grid-cols-3",
							children: stats$1.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: {
									duration: .5,
									delay: i * .08
								},
								className: "card-surface rounded-2xl p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl font-bold text-lime",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: s.label
								})]
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-3",
							children: highlights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: -18
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								transition: {
									duration: .5,
									delay: .1 + i * .08
								},
								className: "group flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-4 transition-colors hover:border-lime/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime/15 text-lime transition-transform duration-300 group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold",
									children: h.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm text-muted-foreground",
									children: h.desc
								})] })]
							}, h.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#projects",
							className: "mt-8 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-5 py-2.5 text-sm font-medium text-lime transition-all hover:bg-lime/20 hover:gap-3",
							children: ["Explore my work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .12,
						className: "lg:sticky lg:top-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: { rotate: 360 },
									transition: {
										duration: 34,
										repeat: Infinity,
										ease: "linear"
									},
									className: "pointer-events-none absolute -inset-6 rounded-[2.5rem] border border-dashed border-lime/20"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-[2rem] border border-lime/25 glow-lime",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: profile.avatar,
											alt: `Portrait of ${profile.name}`,
											loading: "lazy",
											className: "h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pointer-events-none absolute inset-0",
											style: { background: "linear-gradient(to top, color-mix(in oklab, var(--background) 92%, transparent) 4%, transparent 55%)" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute inset-0",
												style: { background: "linear-gradient(115deg, transparent 40%, color-mix(in oklab, var(--lime) 22%, transparent) 50%, transparent 60%)" }
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-x-5 bottom-5 flex items-end justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-xl font-semibold",
												children: profile.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-xs text-lime",
												children: profile.location
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-2 rounded-full border border-lime/40 bg-background/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-lime backdrop-blur",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" }), "Open to work"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "card-surface rounded-2xl p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
											children: "Focus"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-semibold",
											children: "AI & Full-stack"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "card-surface rounded-2xl p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
											children: "Availability"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-semibold text-lime",
											children: "Remote worldwide"
										})]
									})]
								})
							]
						})
					})]
				})
			]
		})
	});
}
var groupIcons = {
	Languages: CodeXml,
	"AI & Data": Brain,
	"Cloud & DevOps": Cloud,
	Frontend: MonitorSmartphone,
	Backend: Server,
	Database,
	Design: Palette,
	Tools: Wrench
};
var iconUrl = (name) => {
	return `https://cdn.simpleicons.org/${techSlugs[name] ?? name.toLowerCase().replace(/[^a-z0-9]/g, "")}`;
};
var containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: .04,
			delayChildren: .1
		}
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: .02,
			staggerDirection: -1
		}
	}
};
var cardVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: .95
	},
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 350,
			damping: 25
		}
	},
	exit: {
		opacity: 0,
		scale: .9,
		transition: { duration: .2 }
	}
};
function TechCard({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: cardVariants,
		layout: true,
		className: "group relative flex h-[64px] items-center gap-3.5 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] px-4 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-lime/40 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_-10px_rgba(163,230,53,0.2)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
				style: { background: "radial-gradient(120px circle at 50% 50%, color-mix(in oklab, var(--lime) 15%, transparent), transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 shadow-inner transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:border-lime/50 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent opacity-50 mix-blend-overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: iconUrl(name),
					alt: `${name} icon`,
					"aria-hidden": "true",
					loading: "lazy",
					width: 22,
					height: 22,
					className: "relative z-10 h-[22px] w-[22px] object-contain brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]",
					onError: (e) => {
						const target = e.target;
						target.style.visibility = "hidden";
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10 min-w-0 truncate text-sm font-semibold tracking-wide text-foreground/80 transition-colors duration-300 group-hover:text-lime",
				children: name
			})
		]
	});
}
function TechStack() {
	const [active, setActive] = (0, import_react.useState)("All");
	const tabs = (0, import_react.useMemo)(() => ["All", ...techGroups.map((g) => g.group)], []);
	const total = (0, import_react.useMemo)(() => techGroups.reduce((n, g) => n + g.items.length, 0), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "tech",
		className: "relative py-24 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-x-0 top-1/4 h-[500px]",
			style: { background: "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in oklab, var(--lime) 5%, transparent), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1200px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: Layers,
					children: "Technology Stack"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "Tools &",
					accent: "Technologies",
					sub: "Organised by discipline — the languages, frameworks and tools I reach for when building and shipping products."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 flex min-h-[44px] flex-wrap items-center justify-center gap-2.5",
					children: tabs.map((t) => {
						const Icon = t === "All" ? Grid3x3 : groupIcons[t] ?? Layers;
						const count = t === "All" ? total : techGroups.find((g) => g.group === t)?.items.length ?? 0;
						const isActive = active === t;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(t),
							"aria-pressed": isActive,
							className: "relative flex h-11 items-center gap-2.5 rounded-full px-5 text-sm outline-none transition-transform duration-300 hover:-translate-y-0.5 active:scale-95",
							children: [isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								layoutId: "activeTechTabIndicator",
								className: "absolute inset-0 rounded-full bg-lime shadow-[0_0_20px_rgba(163,230,53,0.4)]",
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 30
								}
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:border-lime/30 hover:bg-white/[0.06]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `relative z-10 flex items-center gap-2 font-semibold tracking-wide ${isActive ? "text-[#0a0f1e]" : "text-muted-foreground hover:text-lime"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-[18px] w-[18px]" }),
									t,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `ml-1 rounded-full px-2 py-0.5 font-mono text-[10px] tabular-nums ${isActive ? "bg-[#0a0f1e]/20 text-[#0a0f1e]" : "bg-white/5 text-muted-foreground"}`,
										children: count
									})
								]
							})]
						}, t);
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "mt-16 space-y-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: techGroups.filter((g) => active === "All" || active === g.group).map((g) => {
							const Icon = groupIcons[g.group] ?? Layers;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
								layout: true,
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20,
									filter: "blur(4px)"
								},
								transition: {
									duration: .5,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lime/30 bg-lime/10 text-lime shadow-[0_0_15px_rgba(163,230,53,0.15)]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-2xl font-bold tracking-tight text-foreground/90",
												children: g.group
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] flex-1 rounded-full bg-gradient-to-r from-border to-transparent" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-2xl text-[15px] text-muted-foreground/80 leading-relaxed",
										children: g.note
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										variants: containerVariants,
										initial: "hidden",
										animate: "show",
										exit: "exit",
										className: "mt-8 grid auto-rows-[64px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
										children: g.items.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechCard, { name }, name))
									})
								]
							}, g.group);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-24 overflow-hidden rounded-3xl border border-lime/20 bg-[#0a0f1e]/50 p-8 shadow-[0_0_40px_rgba(163,230,53,0.06)] backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent opacity-50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2.5 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-lime",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 shrink-0 animate-pulse" }), "Currently exploring"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[15px] text-muted-foreground/90",
								children: "Levelling up beyond the frontend — backend systems, cloud, and AI tooling."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 mt-6 flex flex-wrap gap-2.5 sm:mt-0",
							children: learning.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cursor-default rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-sm font-semibold tracking-wide text-lime transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-lime/80 hover:bg-lime/20 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]",
								children: l
							}, l))
						})
					]
				}) })
			]
		})]
	});
}
function projectInitials(name) {
	return name.split(/\s+/).map((part) => part[0]).filter(Boolean).slice(0, 3).join("").toUpperCase();
}
function PurpleTechOrbit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[220px] sm:size-[260px] pointer-events-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 25,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute inset-0 rounded-full border-[2px] border-dashed border-[#7C3AED]/60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					rotate: -360,
					scale: [
						1,
						1.03,
						1
					]
				},
				transition: {
					rotate: {
						duration: 15,
						repeat: Infinity,
						ease: "linear"
					},
					scale: {
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut"
					}
				},
				className: "absolute inset-[18px] rounded-full border border-[#8B5CF6] shadow-[0_0_25px_rgba(139,92,246,0.4)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 25,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#A78BFA] shadow-[0_0_15px_#A78BFA]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#A78BFA] shadow-[0_0_15px_#A78BFA]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 -left-1.5 size-2 -translate-y-1/2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 -right-1.5 size-2 -translate-y-1/2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" })
				]
			})
		]
	});
}
function Projects() {
	const [i, setI] = (0, import_react.useState)(0);
	const p = projects[i];
	const go = (dir) => setI((v) => (v + dir + projects.length) % projects.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: Briefcase,
					children: "Featured Projects"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "Selected",
					accent: "Work & Experiments",
					sub: "A collection of high-performance web applications and AI-driven tools built with a focus on scalability, clean architecture, and user experience."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							initial: {
								opacity: 0,
								x: 40
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: -40
							},
							transition: {
								duration: .45,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "card-surface grid gap-10 rounded-3xl p-8 md:p-12 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex h-[280px] w-full items-center justify-center sm:h-[320px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/20 blur-[80px]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute z-0",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurpleTechOrbit, {})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative z-10 grid size-40 place-items-center rounded-full border border-lime/40 bg-[#060913] p-1 shadow-[0_0_50px_rgba(163,230,53,0.15)] sm:size-48 backdrop-blur-md",
												children: p.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: p.logo,
													alt: `${p.name} logo`,
													loading: "lazy",
													className: "relative size-[140px] rounded-full object-contain sm:size-[170px]"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "relative grid size-[140px] place-items-center rounded-full border border-lime/10 bg-background/80 text-center sm:size-[170px]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-display text-4xl font-bold text-lime",
														children: projectInitials(p.name)
													})
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-muted-foreground",
										children: p.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap justify-center gap-2",
										children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { backgroundColor: s.color },
											className: "rounded px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white",
											children: s.label
										}, s.label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-7 flex flex-wrap justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.github,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), " View on GitHub"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.live,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-full border border-lime/50 px-5 py-2.5 text-sm font-semibold text-lime transition-colors hover:bg-lime/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" }), " View Live"]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl font-bold text-lime sm:text-4xl",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 leading-relaxed text-muted-foreground",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-7 space-y-4",
									children: p.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-[15px] text-foreground/85",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-1 h-4 w-4 shrink-0 text-lime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pt })]
									}, pt))
								})
							] })]
						}, p.name)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go(-1),
								"aria-label": "Previous project",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 transition-colors hover:border-lime/50 hover:text-lime",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: projects.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": `Go to project ${idx + 1}`,
									onClick: () => setI(idx),
									className: `h-2 rounded-full transition-all duration-300 ${idx === i ? "w-8 bg-lime" : "w-2 bg-muted-foreground/40"}`
								}, idx))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go(1),
								"aria-label": "Next project",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 transition-colors hover:border-lime/50 hover:text-lime",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})
						]
					})]
				})
			]
		})
	});
}
var icons = {
	code: CodeXml,
	users: Users,
	globe: Globe,
	award: Award,
	trophy: Trophy,
	github: Github
};
var stats = [
	{
		value: "8.67",
		label: "CGPA · B.Tech IT"
	},
	{
		value: "5000+",
		label: "ECWoC community"
	},
	{
		value: "30h",
		label: "Django training"
	},
	{
		value: "2×",
		label: "Hackathon runs"
	}
];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		className: "relative py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-x-0 top-1/3 h-[420px]",
			style: { background: "radial-gradient(ellipse 55% 50% at 50% 50%, color-mix(in oklab, var(--lime) 7%, transparent), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1200px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: Wrench,
					children: "Craft & Experience"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "My",
					accent: "Works & Experience",
					sub: "A journey through the projects I've built, the communities I've contributed to, and the experiences that shaped my growth as a developer."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:sticky lg:top-28 lg:self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-surface rounded-2xl p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-[0.25em] text-lime",
									children: "Timeline · 2024 → now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-3 font-display text-2xl font-semibold leading-snug",
									children: [
										"Learning by building,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"shipping in public."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: "From classrooms to hackathon war-rooms and open-source issue threads — every step below added a tool, a habit or a teammate."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-2 gap-3",
									children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-background/50 p-3.5 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl font-bold text-lime",
											children: s.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] leading-tight text-muted-foreground",
											children: s.label
										})]
									}, s.label))
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative pl-8 sm:pl-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-lime via-lime/40 to-transparent sm:left-[15px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: experiences.map((e, idx) => {
								const Icon = icons[e.icon];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
									initial: {
										opacity: 0,
										y: 24
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: {
										once: true,
										margin: "-80px"
									},
									transition: {
										duration: .5,
										delay: idx * .06,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "group relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -left-8 top-6 grid h-6 w-6 place-items-center rounded-full border border-lime/40 bg-background sm:-left-10 sm:h-8 sm:w-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-lime glow-lime animate-pulse-glow" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "card-surface relative overflow-hidden rounded-2xl p-6 transition-[border-color,transform] duration-300 will-change-transform group-hover:-translate-y-1 group-hover:border-lime/50 sm:p-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "pointer-events-none absolute right-5 top-4 font-display text-5xl font-bold text-foreground/[0.04]",
												children: String(idx + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex flex-wrap items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-lime/30 bg-lime/10 text-lime",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full border border-lime/40 bg-lime/10 px-3 py-1 font-mono text-[11px] tracking-wide text-lime",
													children: e.period
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "relative mt-4 font-display text-lg font-semibold leading-snug sm:text-xl",
												children: e.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "relative mt-1 flex items-center gap-1.5 text-sm text-lime",
												children: [e.org, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "relative mt-3 text-sm leading-relaxed text-muted-foreground",
												children: e.desc
											})
										]
									})]
								}, e.role);
							})
						})]
					})]
				})
			]
		})]
	});
}
var USERNAME = "Snehasish-tech";
var CONTRIBUTION_CHART_URL = `https://ghchart.rshah.org/40916c/${USERNAME}`;
function GithubActivity() {
	const [languages, setLanguages] = (0, import_react.useState)([]);
	const [stats, setStats] = (0, import_react.useState)(null);
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setInView(true);
				io.disconnect();
			}
		}, { rootMargin: "300px" });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const ac = new AbortController();
		(async () => {
			try {
				const [uRes, rRes] = await Promise.all([fetch(`https://api.github.com/users/${USERNAME}`, { signal: ac.signal }), fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, { signal: ac.signal })]);
				if (!uRes.ok || !rRes.ok) return;
				const user = await uRes.json();
				const own = (await rRes.json()).filter((r) => !r.fork);
				const languageCounts = own.reduce((acc, repo) => {
					const language = repo.language ?? "Other";
					acc[language] = (acc[language] ?? 0) + 1;
					return acc;
				}, {});
				const languageEntries = Object.entries(languageCounts).map(([name, count]) => ({
					name,
					count,
					percent: own.length ? Math.round(count / own.length * 100) : 0
				})).sort((a, b) => b.count - a.count).slice(0, 6);
				setStats({
					repos: user.public_repos ?? own.length,
					stars: own.reduce((n, r) => n + (r.stargazers_count || 0), 0),
					followers: user.followers ?? 0
				});
				setLanguages(languageEntries);
			} catch {}
		})();
		return () => ac.abort();
	}, [inView]);
	const cards = [
		{
			label: "Public repos",
			value: stats ? String(stats.repos) : "25+"
		},
		{
			label: "Stars earned",
			value: stats ? String(stats.stars) : "—"
		},
		{
			label: "Followers",
			value: stats ? String(stats.followers) : "—"
		},
		{
			label: "Primary language",
			value: languages[0]?.name ?? "TypeScript"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		id: "github",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: Github,
					children: "Open Source"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "My",
					accent: "GitHub Activity",
					sub: "Commits, repositories and the day-to-day rhythm of building in public."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-4 md:grid-cols-4",
					children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface rounded-2xl p-5 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-bold text-lime tabular-nums",
							children: c.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: c.label
						})]
					}, c.label))
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-surface h-full rounded-2xl p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex min-w-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-3.5 w-3.5 shrink-0" }), " Contribution rhythm"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://github.com/${USERNAME}`,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-lime",
										children: ["View profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 overflow-hidden rounded-2xl border border-border bg-background/35 p-3 sm:p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-lime",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse-glow rounded-full bg-lime" }), "Live"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
											children: "GitHub activity"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 overflow-x-auto pb-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: CONTRIBUTION_CHART_URL,
											alt: `${USERNAME} GitHub contribution chart`,
											loading: "lazy",
											className: "min-w-[520px] rounded-xl border border-border bg-background/40 sm:min-w-[640px]"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-2 text-[11px] text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Less" }),
										[
											"bg-secondary/50",
											"bg-lime/25",
											"bg-lime/45",
											"bg-lime/70",
											"bg-lime"
										].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-[11px] w-[11px] rounded-[3px] ${c}` }, i)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "More" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid gap-3 sm:grid-cols-3",
									children: [
										{
											v: "Daily",
											l: "Commit habit"
										},
										{
											v: "26w",
											l: "Window shown"
										},
										{
											v: "Public",
											l: "Building in the open"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-background/50 p-3.5 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-base font-bold text-lime",
											children: s.v
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] leading-tight text-muted-foreground",
											children: s.l
										})]
									}, s.l))
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-surface h-full rounded-2xl p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-3.5 w-3.5 shrink-0" }), " Language share"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-lime",
										children: "Live"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 rounded-2xl border border-border bg-background/35 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3 text-[11px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Based on public repos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stats ? `${stats.repos} repos` : "live loading" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 space-y-4",
										children: (languages.length ? languages : placeholderLanguages).map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-3 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: lang.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-xs text-lime",
													children: [lang.percent, "%"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-2 overflow-hidden rounded-full bg-secondary/70",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full rounded-full bg-gradient-to-r from-lime via-lime/80 to-lime-soft transition-all duration-700",
													style: { width: `${Math.max(lang.percent, 6)}%` }
												})
											})]
										}, lang.name))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-3",
									children: [
										{
											v: `${languages.length || 0}`,
											l: "Languages tracked"
										},
										{
											v: `${languages[0]?.name ?? "TypeScript"}`,
											l: "Top language"
										},
										{
											v: `${languages[0]?.percent ?? 0}%`,
											l: "Share"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-background/50 p-3.5 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-base font-bold text-lime",
											children: s.v
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] leading-tight text-muted-foreground",
											children: s.l
										})]
									}, s.l))
								})
							]
						})
					})]
				})
			]
		})
	});
}
var placeholderLanguages = [
	{
		name: "TypeScript",
		count: 0,
		percent: 72
	},
	{
		name: "JavaScript",
		count: 0,
		percent: 16
	},
	{
		name: "CSS",
		count: 0,
		percent: 7
	},
	{
		name: "HTML",
		count: 0,
		percent: 5
	}
];
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "education",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: GraduationCap,
					children: "Academics"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "Education &",
					accent: "Qualifications",
					sub: "The academic foundation behind the engineering — from school fundamentals to an IT degree in progress."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 lg:grid-cols-3",
					children: education.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-surface group flex h-full flex-col rounded-2xl p-6 transition-[border-color,transform] duration-300 will-change-transform hover:-translate-y-1 hover:border-lime/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lime/30 bg-lime/10 text-lime",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `justify-self-end rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${e.status === "In Progress" ? "border border-lime/40 bg-lime/10 text-lime" : "border border-border bg-secondary/50 text-muted-foreground"}`,
										children: e.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-lg font-semibold leading-snug",
									children: e.degree
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-lime",
									children: e.institution
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5 shrink-0" }),
											" ",
											e.period
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 shrink-0" }),
											" ",
											e.location
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-muted-foreground",
									children: e.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4 shrink-0 text-lime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: e.grade
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex flex-wrap gap-2 pt-1",
									children: e.coursework.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[11px] text-foreground/80",
										children: c
									}, c))
								})
							]
						})
					}, e.degree))
				})
			]
		})
	});
}
var filters = [
	{
		label: "Hackathon",
		icon: Trophy
	},
	{
		label: "Skills",
		icon: Medal
	},
	{
		label: "Extracurricular",
		icon: Star
	}
];
function Certificates() {
	const [active, setActive] = (0, import_react.useState)("Hackathon");
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const list = certificates.filter((c) => showAll ? true : c.category === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "certificates",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: Medal,
					children: "Achievements"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "Certifications &",
					accent: "Badges",
					sub: "Validated expertise through recognised certifications, hackathon wins and continuous skill development."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-wrap justify-center gap-3",
					children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setActive(f.label);
							setShowAll(false);
						},
						className: `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${!showAll && active === f.label ? "bg-lime text-primary-foreground" : "border border-border bg-secondary/50 text-foreground/80 hover:border-lime/50 hover:text-lime"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-4 w-4" }), f.label]
					}, f.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .3,
							ease: "easeOut"
						},
						className: "group overflow-hidden rounded-2xl border border-border bg-navy-deep/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/9] overflow-hidden bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.image,
								alt: c.imageAlt ?? `${c.title} certificate`,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-3 top-3 rounded-full bg-lime px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-primary-foreground",
								children: c.ribbon
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold leading-snug",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 flex items-center gap-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
										" ",
										c.date
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 line-clamp-2 text-sm text-muted-foreground",
									children: c.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: c.image,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/60 py-2 text-sm transition-colors hover:border-lime/50 hover:text-lime",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), " View in Full"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: c.asset,
										download: true,
										className: "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/60 py-2 text-sm transition-colors hover:border-lime/50 hover:text-lime",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download"]
									})]
								})
							]
						})]
					}, c.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowAll((v) => !v),
						className: "inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-7 py-3 text-sm font-medium text-lime transition-colors hover:bg-lime/20",
						children: [showAll ? "Show Less" : "Show All", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}` })]
					})
				})
			]
		})
	});
}
var resumeFile = resume.pdf ?? resume.href;
function ResumeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "resume",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1100px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, {
					icon: FileText,
					children: "Resume"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					lead: "Grab my",
					accent: "Full Resume",
					sub: "A one-page snapshot of my education, projects, stack and achievements — always kept current."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-surface mt-12 overflow-hidden rounded-3xl p-7 sm:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 shrink-0" }),
										" ",
										resume.updated
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-3 font-display text-2xl font-semibold leading-snug sm:text-3xl",
									children: [
										profile.name,
										" — ",
										profile.role
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2.5",
									children: resume.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-lime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h })]
									}, h))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: resumeFile,
								target: "_blank",
								download: "Snehasish_Dey_Resume.pdf",
								rel: "noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 will-change-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Resume"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: resumeFile,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-medium transition-colors duration-200 hover:border-lime/50 hover:text-lime",
								children: ["View online ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})]
						})]
					})
				}) })
			]
		})
	});
}
function Connect() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "connect",
		className: "relative border-t border-border py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "bg-gradient-to-b from-foreground/90 to-foreground/20 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl",
					children: "Let's Connect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 inline-flex flex-wrap gap-1 rounded-2xl border border-border bg-secondary/40 p-2",
					children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.href,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": s.label,
						className: "grid h-11 w-11 place-items-center rounded-xl text-foreground/75 transition-all duration-200 hover:-translate-y-1 hover:bg-lime/10 hover:text-lime",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-[18px] w-[18px]" })
					}, s.label))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .12,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl font-semibold leading-snug text-lime sm:text-4xl",
						children: "Have an idea or want to collaborate? I'd love to hear from you."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-lg text-muted-foreground",
						children: [
							"Looking for a contact form? Skip the traditional way, just reach out directly at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${profile.email}`,
								className: "font-semibold text-lime hover:underline",
								children: profile.email
							}),
							" ",
							"and I'll handle everything for you."
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						profile.name,
						". All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap justify-center gap-5",
					children: navLinks.slice(0, 5).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-lime",
						children: l.label
					}, l.label))
				})]
			})]
		})
	});
}
/**
* Lightweight cursor accent — a lime ring that trails the pointer with
* spring-like easing and a crisp dot that tracks it 1:1.
*
* - Runs entirely on rAF + transforms (no React re-renders per frame).
* - Only mounts on fine-pointer devices; disabled on touch.
* - Respects prefers-reduced-motion.
*/
function CustomCursor() {
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const ringRef = (0, import_react.useRef)(null);
	const dotRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const fine = window.matchMedia("(pointer: fine)");
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setEnabled(fine.matches && !reduced.matches);
		sync();
		fine.addEventListener("change", sync);
		reduced.addEventListener("change", sync);
		return () => {
			fine.removeEventListener("change", sync);
			reduced.removeEventListener("change", sync);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!enabled) return;
		const ring = ringRef.current;
		const dot = dotRef.current;
		if (!ring || !dot) return;
		let tx = window.innerWidth / 2;
		let ty = window.innerHeight / 2;
		let rx = tx;
		let ry = ty;
		let scale = 1;
		let targetScale = 1;
		let visible = false;
		let raf = 0;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
			if (!visible) {
				visible = true;
				rx = tx;
				ry = ty;
				ring.style.opacity = "1";
				dot.style.opacity = "1";
			}
			targetScale = e.target?.closest("a, button, [role=\"button\"], input, textarea, select") ? 1.9 : 1;
		};
		const onLeave = () => {
			visible = false;
			ring.style.opacity = "0";
			dot.style.opacity = "0";
		};
		const loop = () => {
			rx += (tx - rx) * .18;
			ry += (ty - ry) * .18;
			scale += (targetScale - scale) * .15;
			ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${scale.toFixed(3)})`;
			dot.style.transform = `translate3d(${tx - 3}px, ${ty - 3}px, 0)`;
			raf = requestAnimationFrame(loop);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		document.addEventListener("mouseleave", onLeave);
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseleave", onLeave);
		};
	}, [enabled]);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 z-[9999]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: ringRef,
			className: "fixed left-0 top-0 h-9 w-9 rounded-full border border-lime/60 bg-lime/5 opacity-0 transition-opacity duration-300 will-change-transform",
			style: { boxShadow: "0 0 18px color-mix(in oklab, var(--lime) 25%, transparent)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dotRef,
			className: "fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-lime opacity-0 transition-opacity duration-200 will-change-transform"
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ideas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubActivity, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certificates, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Connect, {})
		]
	});
}
//#endregion
export { Index as component };
