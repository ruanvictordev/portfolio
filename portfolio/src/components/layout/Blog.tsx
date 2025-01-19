import { Badge } from "lucide-react";
import { useDevToArticles } from "../../hooks/useDevToArticles";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

// ProjectCard atualizado
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
              <Badge key={topic}>#{topic}</Badge>
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

// BlogCard reutilizando o layout de ProjectCard
const BlogCard: React.FC<{ article?: any; loading?: boolean }> = ({ article, loading }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      {loading ? (
        <Skeleton className="h-6 w-3/4 mb-2" />
      ) : (
        <>
          <img src={article.cover_image} />
          <CardTitle className="text-2xl font-bold">{article.title}</CardTitle>
        </>
      )}
    </CardHeader>
    <CardContent className="flex flex-col w-full gap-4">
      {loading ? (
        <Skeleton className="h-4 w-full" />
      ) : (
        <p className="text-justify">
          {article.description || "No description available."}
        </p>
      )}
      {loading ? (
        <Skeleton className="h-4 w-1/2 mt-4" />
      ) : (
        <p className="text-muted-foreground mt-4">
          Published on: {article.readable_publish_date}
        </p>
      )}
      {loading ? (
        <Skeleton className="h-4 w-full" />
      ) : (
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant={"outline"} className="flex w-full gap-2">
            Read Article
          </Button>
        </a>
      )}
    </CardContent>
  </Card>
);

export default function DevToBlog({ username }: { username: string }) {
  const { articles, loading, error } = useDevToArticles(username);

  return (
    <section className="w-full" id="blog">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">
          Read my recently published articles on Dev.to
        </p>
      </div>

      {error && <p className="text-center">{error}</p>}

      {loading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCard key={index} loading />
          ))}
        </div>
      )}

      {!loading && articles.length === 0 && (
        <p className="text-center">No articles found.</p>
      )}

      {!loading && articles.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
