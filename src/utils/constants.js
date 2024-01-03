import projImg1 from "../assets/images/projects/1.png";
import projImg2 from "../assets/images/projects/2.png";
import projImg3 from "../assets/images/projects/3.png";
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
      "Advanced Certification In Full Stack Development : Electronics & ICT Academy, IIT Guwahati (2023)",
      "Certification in Web Development: Arena Animation(2023)",
    ],
  },
];

export const PROJECT_DATA = [
  {
    id: 1,
    title: "Cinewhiz GPT",
    description:
      "Your personal cinematic curator – Discover tailor-made movie recommendations just for you! ",
    image: projImg1,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/himanshu-khati/cinewhiz-gpt",
    previewUrl: "https://cinewhiz.web.app",
  },
  {
    id: 2,
    title: "Tubeverse",
    description:
      "Discover a vast array of videos spanning across genres - from educational tutorials and mesmerizing vlogs to thrilling gaming adventures and heartwarming storytelling. ",
    image: projImg2,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/himanshu-khati/tubeverse",
    previewUrl: "https://tubeverse.web.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Portfolio website using React, Tailwind CSS, Redux Toolkit.",
    image: projImg3,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/himanshu-khati/portfolio",
    previewUrl: "https://himanshukhati.web.app/",
  },
];

export const YOUR_SERVICE_ID = process.env.REACT_APP_MAIL_SERVICE_ID;
export const YOUR_TEMPLATE_ID = process.env.REACT_APP_MAIL_TEMPLATE_ID;
export const YOUR_PUBLIC_KEY = process.env.REACT_APP_MAIL_PUBLIC_KEY;
export const GIT_HUB = "https://github.com/himanshu-khati";
export const LINKED_IN = "https://www.linkedin.com/in/himanshu-khati";
