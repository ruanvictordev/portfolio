import { useState, useEffect } from "react";

const API_KEY = "AIzaSyCJfI8lSZ06exVcYGOzfz8zvfzRkRC8vic";
const CHANNEL_ID = "UCGrxYTmqKNce5E84Ij0TLvg";

export const useYoutubeVideos = () => {
  const [youtubeVideos, setYoutubeVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar vídeos... " + response.statusText);
        }

        const data: any = await response.json();
        const videos = data.items
          .filter((item: any) => item.id.kind === "youtube#video")
          .map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
          }));

        setYoutubeVideos(videos);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido ao buscar vídeos");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return { youtubeVideos, loading, error };
};
