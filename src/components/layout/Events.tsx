import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { useYoutubeVideos } from "../../hooks/useYoutubeVideos";

const VideoCard: React.FC<{
  video?: { id: string; title: string; thumbnail: string };
  activeVideo: string | null;
  setActiveVideo: (id: string) => void;
  loading?: boolean;
}> = ({ video, activeVideo, setActiveVideo, loading }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      {loading ? (
        <Skeleton className="h-6 w-3/4 mb-2" />
      ) : (
        <CardTitle className="text-md">{video?.title}</CardTitle>
      )}
    </CardHeader>
    <CardContent>
      {loading ? (
        <Skeleton className="h-48 w-full" />
      ) : activeVideo === video?.id ? (
        <iframe
          width="100%"
          height="215"
          src={`https://www.youtube.com/embed/${video!.id}`}
          title={video?.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <a onClick={() => setActiveVideo(video!.id)}>
          <img
            className="w-full h-auto rounded cursor-pointer"
            src={video!.thumbnail}
            alt={video!.title}
          />
        </a>
      )}
    </CardContent>
  </Card>
);

export default function CommunityEvents() {
  const { youtubeVideos, activeVideo, setActiveVideo, loading } = useYoutubeVideos();

  return (
    <div className="bg-secondary p-32 max-md:p-4" id="events">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Últimos Eventos da Comunidade</h1>
        <p className="text-muted-foreground">
          Assista aos nossos eventos recentes no YouTube
        </p>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <VideoCard
              key={index}
              loading
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
            />
          ))}
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
