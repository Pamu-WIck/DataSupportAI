import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { BiPlay, BiPause } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

type VideoCompletionTrackerProps = {
  videoId: string;
  videoTitle: string;
  subject: string;
  topic?: string;
  studentId: number;
  onComplete?: () => void;
};

export const VideoCompletionTracker: React.FC<VideoCompletionTrackerProps> = ({
  videoId,
  videoTitle,
  subject,
  topic,
  studentId,
  onComplete
}) => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // For demo purposes, simulate video progress
  const handlePlayPause = () => {
    if (isPlaying) {
      // Pause the video
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPlaying(false);
    } else {
      // Start or resume the video
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            // Video complete
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              handleVideoCompletion(100);
            }
            return 100;
          }
          return newProgress;
        });
      }, 500); // Update every half second (for demo purposes)
      setIsPlaying(true);
    }
  };

  // In a real implementation, this would be triggered by the YouTube API events
  const handleVideoCompletion = async (watchedPercentage: number) => {
    try {
      // Only record completion if not already completed
      if (!isCompleted) {
        const response = await fetch("/api/video-completions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentId,
            videoId,
            videoTitle,
            subject,
            topic,
            watchedPercentage
          })
        });
        
        const data = await response.json();

        if (data.success) {
          setIsCompleted(true);
          setPointsEarned(data.data.completion.pointsEarned);
          setIsPlaying(false);
          
          // Show success message
          toast({
            title: "Video Completed!",
            description: `You earned ${data.data.completion.pointsEarned} points. Your total is now ${data.data.student.totalPoints} points.`,
            variant: "default",
          });
          
          // Trigger callback if provided
          if (onComplete) {
            onComplete();
          }
        }
      }
    } catch (error) {
      console.error("Error recording video completion:", error);
      toast({
        title: "Error",
        description: "Failed to record your progress. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Calculate background colour based on subject
  const getSubjectColor = () => {
    switch (subject.toLowerCase()) {
      case "biology":
        return "bg-teal-500";
      case "chemistry":
        return "bg-purple-500";
      case "physics":
        return "bg-orange-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{videoTitle}</h3>
        <Badge className={`${getSubjectColor()} text-white`}>{subject}</Badge>
      </div>
      
      {topic && <p className="text-sm text-muted-foreground mb-3">{topic}</p>}
      
      <div className="mb-3">
        <Progress 
          value={progress} 
          className={`h-2 ${getSubjectColor()}`}
        />
        <div className="text-xs text-right mt-1 text-muted-foreground">
          {progress}% complete
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        {!isCompleted ? (
          <Button 
            onClick={handlePlayPause} 
            size="sm" 
            variant={isPlaying ? "outline" : "default"}
            className="flex items-center gap-1"
          >
            {isPlaying ? (
              <>
                <BiPause className="mr-1" /> Pause
              </>
            ) : (
              <>
                <BiPlay className="mr-1" /> {progress > 0 ? "Resume" : "Start"}
              </>
            )}
          </Button>
        ) : (
          <div className="flex items-center text-green-600 font-medium">
            <FaCheck className="mr-1" /> 
            Completed (+{pointsEarned} points)
          </div>
        )}
        
        {progress > 75 && !isCompleted && (
          <Button 
            onClick={() => handleVideoCompletion(progress)} 
            size="sm" 
            variant="outline"
          >
            Mark as Watched
          </Button>
        )}
      </div>
    </div>
  );
};