import projImg1 from "../assets/images/projects/1.png";
import projImg2 from "../assets/images/projects/2.png";
import projImg3 from "../assets/images/projects/3.png";
import projImg4 from "../assets/images/projects/4.png";
import projImg5 from "../assets/images/projects/5.png";
import projImg6 from "../assets/images/projects/6.png";
export const NAVLINKS = [
  {
    id: 1,
    title: "Projects",
    path: "projects",
  },
  {
    id: 2,
    title: "About",
    path: "about",
  },

  {
    id: 3,
    title: "Contact",
    path: "contact",
  },
];

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Next.js",
      "React",
      "Express.js",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "MariaDB",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      " Master of Computer Applications : Maharaja Agrasen Himalayan Garhwal University(2022)",
    ],
  },
  {
    title: "Certification",
    id: "certification",
    content: [
      "Advanced Certification In Full Stack Development : IIT, Guwahati (2023)",
      "Certification in Web Development: Arena Aimation(2023)",
    ],
  },
];

export const PROJECT_DATA = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: projImg1,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: projImg2,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: projImg3,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: projImg4,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: projImg5,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: projImg6,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export const YOUR_SERVICE_ID = process.env.REACT_APP_MAIL_SERVICE_ID;
export const YOUR_TEMPLATE_ID = process.env.REACT_APP_MAIL_TEMPLATE_ID;
export const YOUR_PUBLIC_KEY = process.env.REACT_APP_MAIL_PUBLIC_KEY;
