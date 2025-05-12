import React, { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VideoCompletionTracker } from "./VideoCompletionTracker";
import { Badge } from "@/components/ui/badge";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { queryClient } from "@/lib/queryClient";

type VideoLesson = {
  id: string;
  title: string;
  subject: string;
  topic?: string;
  thumbnailUrl: string;
  duration: string;
  description: string;
};

type VideoLessonsGridProps = {
  studentId: number;
  videos: VideoLesson[];
};

export const VideoLessonsGrid: React.FC<VideoLessonsGridProps> = ({
  studentId,
  videos
}) => {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

  const handleVideoComplete = () => {
    // Invalidate queries to refresh leaderboard and stats
    queryClient.invalidateQueries({ queryKey: ['/api/leaderboard'] });
    queryClient.invalidateQueries({ queryKey: ['/api/video-completions/stats'] });
    queryClient.invalidateQueries({ queryKey: ['/api/students'] });
  };

  // Get subject-specific color
  const getSubjectColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "biology":
        return "bg-teal-100 text-teal-800 border-teal-200";
      case "chemistry":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "physics":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {videos.map((video) => (
        <Dialog key={video.id} open={openVideoId === video.id} onOpenChange={(open) => open ? setOpenVideoId(video.id) : setOpenVideoId(null)}>
          <DialogTrigger asChild>
            <div className="rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="relative">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <BsPlayCircleFill className="text-white text-4xl" />
                </div>
                <Badge className={`absolute top-2 right-2 ${getSubjectColor(video.subject)}`}>
                  {video.subject}
                </Badge>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <FaRegClock className="mr-1" /> {video.duration}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-lg line-clamp-1">{video.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-primary">
                    Watch to earn points (+25-35)
                  </span>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Watch Lesson</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="aspect-video bg-muted rounded-md overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <VideoCompletionTracker
                videoId={video.id}
                videoTitle={video.title}
                subject={video.subject}
                topic={video.topic}
                studentId={studentId}
                onComplete={handleVideoComplete}
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};