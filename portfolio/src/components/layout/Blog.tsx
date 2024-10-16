import { useDevToArticles } from "../../hooks/useDevToArticles";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-CA");
};

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
        <div className="flex flex-col gap-4 w-full items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow w-96 flex justify-center items-center"
            >
              <CardHeader className="flex w-full justify-center items-center">
                <Skeleton className="h-6 w-full mb-2" />
              </CardHeader>
              <CardContent className="flex justify-center items-center m-0 p-0">
                <Skeleton className="h-12 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && articles.length === 0 && (
        <p className="text-center">No articles found.</p>
      )}

      {!loading && articles.length > 0 && (
        <div className="w-full flex flex-col ">
          {articles.map((article) => (
            <a href={article.url} target="_blank" key={article.id}>
              <Card className="w-full flex justify-between items-center hover:cursor-pointer hover:bg-secondary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex gap-2 m-0 p-0 text-lg max-md:text-sm">
                    <p className="text-muted-foreground">
                      {formatDate(article.published_at)}
                    </p>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 text-lg max-md:text-sm flex justify-center gap-2 items-center">
                  <p>{article.page_views_count} views</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline ml-2"
                  >
                    Ler mais...
                  </a>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
