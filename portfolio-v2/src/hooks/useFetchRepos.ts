import { useState, useEffect } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  topics: string[]; 
}

export const useFetchRepos = (topic: string, user: string) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=user:${user}+topic:${topic}`
        );
        const data = await response.json();

        if (response.ok) {
          if (data.items && data.items.length > 0) {
            setRepos(data.items);
          } else {
            setError("Nenhum repositório encontrado.");
          }
        } else {
          setError(data.message || "Erro ao buscar repositórios.");
        }
      } catch (err) {
        setError("Erro ao buscar dados do GitHub.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [topic]);

  return { repos, loading, error };
};
