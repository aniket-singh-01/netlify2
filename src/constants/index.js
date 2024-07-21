import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  apple,
  apple1,
  swift,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codefeast,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "iOS Developer",
    icon: apple1,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "AI ML Engineer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "CodeFeast",
    icon: codefeast,
    iconBg: "#FFFFFF",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Developed a website for CodeFeast using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Gathered requirements from various event organizers to create a unified design accommodating all use cases.",
      "Implemented CRUD operations in MongoDB for efficient content management and participant tracking.",
      "Built an admin backend system using a REST framework to streamline communication between client and server.",
    ],
  },
  {
    title: "Node.js Developer Intern",
    company_name: "HAVELI UAVs",
    icon: nodejs, // Ensure this icon exists in your assets
    iconBg: "#2C6B4F",
    date: "May 2024 - July 2024",
    points: [
      "Integrated user-facing elements developed by front-end developers with server-side logic to ensure seamless application functionality.",
      "Wrote reusable, testable, and efficient code, adhering to best practices for Node.js development.",
      "Designed and implemented low-latency, high-availability, and performant applications to support real-time drone data processing.",
      "Implemented robust security measures and data protection protocols to safeguard sensitive information and ensure application integrity.",
    ],
  }     
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "INSTAGRAM ClONE",
    description:
      "An Instagram clone iOS app built with Swift and UIKit, featuring user authentication, photo sharing, social feeds, profile management and more.",
    tags: [
      {
        name: "swiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Kingfisher",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/aniket-singh-01/Instagram?tab=readme-ov-file",
  },
  {
    name: "HANDLINGO",
    description:
      "HANDLINGO is an innovative sign language recognition project designed to bridge communication gaps by translating sign language gestures into readable text.",
    tags: [
      {
        name: "pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "html/css/js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/aniket-singh-01/SignLanguage/tree/main",
  },
  {
    name: "TODOEY",
    description:
      "TODOEY is a comprehensive task management application designed for iOS, providing users with a seamless and intuitive platform to organize and track their tasks.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "realm",
        color: "green-text-gradient",
      },
      {
        name: "swiftUI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/aniket-singh-01/swift/tree/main/Development/Todoey",
  },
];

export { services, technologies, experiences, projects };

