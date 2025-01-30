export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  repositoryLink: string;
  deployLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Ouvi P2",
    description: "Web application for urban issues management and analysis. Created for my thesis in Systems analysis and development.",
    image: "/images/projects/ouvi-p2.webp",
    technologies: ["Angular", "TypeScript", "PHP", "TailwindCSS", "MySQL", "Recaptcha-API", "GoogleMaps-API"],
    repositoryLink: "",
    deployLink: "https://ouvi-p2.vercel.app/",
  },
  {
    id: 2,
    name: "Encantos Artesanais",
    description: "A simple page for list handmade dolls. Created with Angular, TypeScript, Tailwind and Whatsapp API.",
    image: "/images/projects/encantos-artesanais.webp",
    technologies: ["Angular", "TypeScript", "TailwindCSS", "Whatsapp-API"],
    repositoryLink: "https://github.com/ruanvictordev/encantos-artesanais",
    deployLink: "https://encantos-artesanais.vercel.app/",
  },
  {
    id: 3,
    name: "Task Manager App",
    description: "This project is a task management application built with React, Node.js, Express, MongoDB, and JWT for authentication.",
    image: "/images/projects/tasks-manager.webp",
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "JWT", "Prisma"],
    repositoryLink: "https://github.com/ruanvictordev/tasks-manager",
    deployLink: "https://tasks-manager-client.onrender.com/",
  },
  {
    id: 4,
    name: "Code Warriors",
    description: "This project is a short portfolio for share informations about the community 'Code Warriors'",
    image: "/images/projects/codewarriorsdevs.webp",
    technologies: ["React", "TypeScript", "ShadcnUI", "Github-API", "Youtube-API"],
    repositoryLink: "https://github.com/ruanvictordev/codewarriorsdevs",
    deployLink: "https://codewarriorsdevs.vercel.app/",
  },
];