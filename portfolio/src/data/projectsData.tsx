import imageEncantosArtesanais from "../assets/images/projects/encantos-artesanais.webp";
import imageTasksManager from "../assets/images/projects/tasks-manager.webp";
import imageCodeWarriors from "../assets/images/projects/codewarriorsdevs.webp";

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
    name: "Encantos Artesanais",
    description: "A simple page for list handmade dolls. Created with Angular, TypeScript, Tailwind and Whatsapp API.",
    image: imageEncantosArtesanais,
    technologies: ["Angular", "TypeScript", "TailwindCSS", "Whatsapp-API"],
    repositoryLink: "https://github.com/ruanvictordev/encantos-artesanais",
    deployLink: "https://encantos-artesanais.vercel.app/",
  },
  {
    id: 2,
    name: "Task Manager App",
    description: "This project is a task management application built with React, Node.js, Express, MongoDB, and JWT for authentication.",
    image: imageTasksManager,
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "JWT", "Prisma"],
    repositoryLink: "https://github.com/ruanvictordev/tasks-manager",
    deployLink: "https://tasks-manager-client.onrender.com/",
  },
  {
    id: 3,
    name: "Code Warriors",
    description: "This project is a short portfolio for share informations about the community 'Code Warriors'",
    image: imageCodeWarriors,
    technologies: ["React", "TypeScript", "ShadcnUI", "Github-API", "Youtube-API"],
    repositoryLink: "https://github.com/ruanvictordev/codewarriorsdevs",
    deployLink: "https://codewarriorsdevs.vercel.app/",
  },
];
