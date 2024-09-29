import { useState, useEffect } from "react";
import axios from "axios";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

export const useYoutubeVideos = () => {
  const [youtubeVideos, setYoutubeVideos] = useState<Video[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, 
          {
            params: {
              part: 'snippet',
              channelId: 'UCGrxYTmqKNce5E84Ij0TLvg', // Seu channel ID
              maxResults: 5, // Quantos vídeos você quer carregar
              order: 'date', // Para obter os vídeos mais recentes
              key: 'AIzaSyAJTTOxpV5GoKj5m7tshOi6GUSU-ETwFGI', // Sua chave API
            },
          }
        );

        const videos = response.data.items
          .filter((item: any) => item.id.kind === 'youtube#video') // Filtra apenas vídeos
          .map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
          }));

        setYoutubeVideos(videos);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar vídeos do YouTube:", error);
        setLoading(false);
      }
    };

    fetchYoutubeVideos();
  }, []);

  return {
    youtubeVideos,
    activeVideo,
    setActiveVideo,
    loading,
  };
};
