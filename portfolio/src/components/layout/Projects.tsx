import React from "react";
import { useFetchRepos } from "../../hooks/useFetchRepos";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Skeleton } from "../ui/skeleton"; 

const ProjectCard: React.FC<{ repo?: any; loading?: boolean }> = ({ repo, loading }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      {loading ? (
        <Skeleton className="h-6 w-3/4 mb-2" />
      ) : (
        <CardTitle className="text-2xl font-bold">{repo.name}</CardTitle>
      )}
    </CardHeader>
    <CardContent className="flex flex-col w-full gap-4">
      {loading ? (
        <>
          <Skeleton className="h-4 w-full" />
          <div className="flex flex-wrap gap-2 mt-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Button variant={"outline"} className="flex w-full gap-2 opacity-50 cursor-not-allowed">
            <Skeleton className="h-4 w-full" />
          </Button>
        </>
      ) : (
        <>
          <p className="text-justify">{repo.description || "Sem descrição"}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {repo.topics.map((topic: string) => (
              <Badge key={topic} variant="outline">#{topic}</Badge>
            ))}
          </div>
          <a href={repo.html_url} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button variant={"outline"} className="flex w-full gap-2">
              <GitHubLogoIcon />
              See on Github
            </Button>
          </a>
        </>
      )}
    </CardContent>
  </Card>
);

const Projects: React.FC = () => {
  const { repos, loading, error } = useFetchRepos("finished", "ruanvictordev");

  return (
    <div className="p-24 max-md:p-4" id="projects">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          See my bests projects
        </p>
      </div>
      <section className="w-full flex justify-around gap-6 items-center my-12 max-md:flex-col">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <ProjectCard key={index} loading />
            ))
          ) : error ? (
            <p className="flex items-center justify-center text-center">{error}</p>
          ) : (
            repos.map(repo => (
              <ProjectCard key={repo.id} repo={repo} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
