export const personalInfo = {
  name: "Anand Kumar Prajapati",
  shortName: "Anand Prajapati",
  greeting: "Hi, I'm Anand Prajapati",
  titles: [
    "Full Stack Developer",
    "MERN Developer",
    "Software Engineer"
  ],
  role: "Software Engineer",
  description: "I build modern, scalable web applications with clean code and a great impactful Project. Passionate about Frontend-Web Development with HTML, CSS, JavaScript, TypeScript, Bootstrap, React, Node.js, and Databases with MongoDB. Creating impactful digital solutions that make a difference.",
  resumeUrl: "/image & resume/anand.pdf",
  resumeFilename: "Anand Kumar Prajapati Resume.pdf",
  profileImg: "/image & resume/anand.jpeg",
  location: "Ghaziabad, India",
  socials: {
    linkedin: "https://www.linkedin.com/in/anand-prajapati-9bb584229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/anandkprajapati123",
    instagram: "https://www.instagram.com/anandkumarprajapati2003/",
    whatsapp: "https://wa.me/9137184135?text=Hi%20Anand,%20I%20saw%20your%20portfolio%20and%20want%20to%20connect."
  }
};

export const aboutHighlights = [
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Writing maintainable, efficient code following best practices",
    icon: "code"
  },
  {
    id: "quick-learner",
    title: "Quick Learner",
    description: "Quick to adapt and master new technologies",
    icon: "bolt"
  },
  {
    id: "mern-dev",
    title: "MERN Stack Developer",
    description: "Building responsive, user-friendly websites and applications",
    icon: "mern"
  }
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C", icon: "c", glowColor: "rgba(0, 89, 156, 0.4)" },
      { name: "C++", icon: "cpp", glowColor: "rgba(0, 68, 130, 0.4)" },
      { name: "Java (Basic)", icon: "java", glowColor: "rgba(227, 33, 41, 0.3)" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "html", glowColor: "rgba(227, 79, 38, 0.4)" },
      { name: "CSS3", icon: "css", glowColor: "rgba(21, 114, 182, 0.4)" },
      { name: "JavaScript", icon: "js", glowColor: "rgba(247, 223, 30, 0.4)" },
      { name: "TypeScript", icon: "typescript", glowColor: "rgba(49, 120, 198, 0.4)" },
      { name: "React", icon: "react", glowColor: "rgba(97, 218, 251, 0.4)" },
      { name: "Bootstrap", icon: "bootstrap", glowColor: "rgba(117, 58, 224, 0.4)" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "node", glowColor: "rgba(51, 153, 51, 0.4)" },
      { name: "Express.js", icon: "express", glowColor: "rgba(255, 255, 255, 0.2)" },
      { name: "REST APIs", icon: "api", glowColor: "rgba(0, 240, 255, 0.3)" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb", glowColor: "rgba(71, 162, 72, 0.4)" }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: "git", glowColor: "rgba(240, 80, 50, 0.4)" },
      { name: "GitHub", icon: "github", glowColor: "rgba(255, 255, 255, 0.3)" },
      { name: "VS Code", icon: "vscode", glowColor: "rgba(0, 122, 204, 0.4)" },
      { name: "Antigravity", icon: "antigravity", glowColor: "rgba(0, 240, 255, 0.3)" },
      { name: "Figma", icon: "figma", glowColor: "rgba(242, 78, 29, 0.4)" },
      { name: "Postman", icon: "postman", glowColor: "rgba(255, 108, 55, 0.4)" },
      { name: "Docker", icon: "docker", glowColor: "rgba(36, 150, 237, 0.4)" },
      { name: "Kubernetes", icon: "kubernetes", glowColor: "rgba(50, 108, 230, 0.4)" }
    ]
  }
];


export const servicesData = [
  {
    id: "mern-stack-development",
    title: "MERN Stack Development",
    description: "From frontend interfaces to backend systems, I build complete MERN stack applications that are fast, reliable, and designed to meet user needs. My goal is to create scalable, secure, and user-friendly applications that provide real value to businesses and users.",
    featured: true
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Mobile-first, responsive interfaces tailored for desktops, tablets, and mobile devices.",
    featured: false
  },
  {
    id: "database-design",
    title: "Database Design",
    description: "Efficient database architecture, indexing, queries optimization using MongoDB.",
    featured: false
  }
];

export const projectsData = [
  {
    id: "freshthali",
    title: "FreshThali",
    subtitle: "E-Commerce Platform",
    description: "Built a MERN-based food delivery platform with admin panel, secure authentication, role-based access control, and Razorpay payment integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT"],
    thumbnail: "/image & resume/freshthali-thumbnail.png",
    liveUrl: "https://freshthali-food-del.netlify.app/",
    githubUrl: "https://github.com/anandkprajapati123/HMFD",
    featured: true
  },
  {
    id: "ai-chatbuddy",
    title: "AI ChatBuddy",
    subtitle: "AI Image & Chat Assistant",
    description: "Developed a full-stack AI chatbot using React, Node.js, Google Gemini API, and Pollinations API, supporting text, image analysis, and image generation.",
    tech: ["React.js", "Node.js", "Express.js", "Google Gemini API"],
    thumbnail: "/image & resume/AiChat-thumbnail.png",
    liveUrl: "https://smartaichatbuddy.netlify.app/",
    githubUrl: "https://github.com/anandkprajapati123/ChatBuddy",
    featured: true
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Developer Portfolio",
    description: "Created a modern responsive portfolio website using React, Vite, CSS Modules and Framer Motion with custom animations and interactive UI.",
    tech: ["React.js", "Vite", "Framer Motion", "CSS Modules"],
    thumbnail: "/image & resume/portfolio-thumbnail.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "ABES Engineering College, Ghaziabad",
    location: "Ghaziabad, India",
    date: "2023 – 2027",
    description: "Pursuing a Bachelor's degree in Computer Engineering, focusing on software development, data structures, algorithms, and modern web technologies. Actively participating in coding competitions and building practical projects.",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Web Development",
      "Computer Networks"
    ]
  }
];
