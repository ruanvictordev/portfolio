import { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  published_at: string;
  page_views_count: number;
  url: string;
}

export const useDevToArticles = (username: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null); 

      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${username}&per_page=30`
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Erro: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          setArticles([]);
          console.warn("The response API isn't format.", data);
        }
      } catch (error) {
        console.error("Error while search articles on DEV.to:", error);
        setError("Error while search articles. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchArticles();
    }
  }, [username]);

  return { articles, loading, error };
};
