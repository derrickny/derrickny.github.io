import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  pytorch,
  html,
  css,
  django,
  python,
  tailwind,
  nodejs,
  flask,
  tensorflow,
  git,
  figma,
  docker,
  naivas,
  intercity,
  carrent,
  jobit,
  tableau,
  tripguide,
  jupyter,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "IT Support Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Tableau",
    icon: tableau,
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
    name: "Flask",
    icon: flask,
  },
  {
    name: "Python",
    icon: python,
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
    title: "IT Support Specialist",
    company_name: "Intercity Secure Homes Ltd",
    icon: intercity,
    iconBg: "#383E56",
    date: "Part time",
    points: [
      "Developing and maintaining company web application.",
      "Managing hosting services for the company.",
      "offering Technical support.",
      "Creation of company posters and managing social media platforms.",
    ],
  },
  {
    title: "ICT OPs",
    company_name: "Naivas",
    icon: naivas,
    iconBg: "#E6DEDD",
    date: "Februray 2023 - March 2023",
    points: [
      "Offered hardware and software Support .",
      "Data Entry.",
      "Networking.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Derrick, ability to understand technical problems and solve them is top tier thanks to him we were able to shorten timetaken to dealing with software and  hadware issues",
    name: "Eunice Nduta",
    designation: "Head ICT Ops",
    company: "Naivas",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met an IT Support Specialist that cares for employees such as Derrick Does ",
    name: "Franics Ngari",
    designation: "CIO",
    company: "Naivas",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Derrick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vincent Mutuiri",
    designation: "Technical Officer ",
    company: "Intercity Secure homes ltd",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
