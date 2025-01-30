import React from "react";
import { projects, Project } from "../../data/projectsData";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Skeleton } from "../ui/skeleton";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="hover:shadow-lg transition-shadow flex flex-col h-full overflow-hidden">
    <CardHeader>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-md"
      />
      <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col justify-between w-full h-full gap-4">
      <p className="text-justify">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string) => (
          <Badge key={tech} variant="outline">
            #{tech}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {project.repositoryLink ? (
          <a
            href={project.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="outline" className="flex w-full gap-2">
              <GitHubLogoIcon />
              View on GitHub
            </Button>
          </a>
        ) : (
          <Button
            variant="outline"
            className="flex w-full gap-2 cursor-not-allowed"
            disabled
          >
            <GitHubLogoIcon />
            View on GitHub
          </Button>
        )}

        <a
          href={project.deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="outline" className="flex w-full gap-2">
            <ExternalLinkIcon />
            View Deploy
          </Button>
        </a>
      </div>
    </CardContent>
  </Card>
);

const Projects: React.FC = () => (
  <div className="flex flex-col w-full" id="projects">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-muted-foreground">See my best projects</p>
    </div>
    <section className="w-full flex justify-center items-center my-12">
      {projects.length === 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-60 w-full" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  </div>
);

export default Projects;
