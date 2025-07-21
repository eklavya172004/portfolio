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
} from "../../public/assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web.src || web, // Extract .src property
  },
  {
    title: "Problem Solver",
    icon: mobile.src || mobile,
  },
  {
    title: "Backend Developer",
    icon: backend.src || backend,
  },
  {
    title: "Devops Expert",
    icon: creator.src || creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html.src || html,
  },
  {
    name: "CSS 3",
    icon: css.src || css,
  },
  {
    name: "JavaScript",
    icon: javascript.src || javascript,
  },
  {
    name: "TypeScript",
    icon: typescript.src || typescript,
  },
  {
    name: "React JS",
    icon: reactjs.src || reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux.src || redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind.src || tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs.src || nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb.src || mongodb,
  },
  {
    name: "Three JS",
    icon: threejs.src || threejs,
  },
  {
    name: "git",
    icon: git.src || git,
  },
  {
    name: "figma",
    icon: figma.src || figma,
  },
  {
    name: "docker",
    icon: docker.src || docker,
  },
];

const experiences = [
  {
    id: 1,
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks.src || starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    id: 2,
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla.src || tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    id: 3,
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify.src || shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    id: 4,
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta.src || meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id:1,
    title: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags:["All","Fullstack"],
    image: carrent.src || carrent,
    source_code_link: "https://github.com/eklavya172004",
    preview: "https://carrent-website.vercel.app/",
  },
  {
    id:2,
    title: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags:["All","Frontend"],
    image: carrent.src || carrent,
    source_code_link: "https://github.com/eklavya172004",
        preview: "https://carrent-website.vercel.app/",
  },
  {
    id:3,
    title: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags:["All","Fullstack"],
    image: carrent.src || carrent,
    source_code_link: "https://github.com/eklavya172004",
    preview: "https://carrent-website.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
