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
          console.warn("A resposta da API não está no formato esperado.", data);
        }
      } catch (error) {
        console.error("Erro ao buscar artigos do DEV.to:", error);
        setError("Erro ao buscar artigos. Tente novamente mais tarde.");
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
