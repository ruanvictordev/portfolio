import { useState } from "react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

export const useYoutubeVideos = () => {
  const youtubeVideos: Video[] = [
    {
        id: "OF6SbjIQSIc",
        title: "Apresentação de Projeto - Opus: Plataforma de Oportunidades",
        thumbnail: "https://i.ytimg.com/vi/OF6SbjIQSIc/hqdefault.jpg?sqp=-oaymwEpCNACELwBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLD2oO71fx8VwarqPxeKLeGolvf_BA",
    },
    {
      id: "ekkhJUCVEX4",
      title: "#01 Meetup - Apresentando a Comunidade Code Warriors",
      thumbnail: "https://i.ytimg.com/vi/ekkhJUCVEX4/hqdefault.jpg?sqp=-oaymwEpCNACELwBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLCLWcEQK6a8jr_6czc8BO60FGsZhw",
    },
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return {
    youtubeVideos,
    activeVideo,
    setActiveVideo,
    loading,
  };
};
