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
          `https://cors-anywhere.herokuapp.com/https://dev.to/api/articles?username=${username}`
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          setArticles([]);
          console.warn("The API response format is unexpected.", data);
        }
      } catch (error) {
        console.error("Error fetching articles from DEV.to:", error);
        setError("Error fetching articles. Please try again later.");
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