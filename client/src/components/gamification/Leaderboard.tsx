import { useState, useEffect } from 'react';
import { Medal, Trophy, Flame, CircleUser } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type Student = {
  id: number;
  name: string;
  totalPoints: number;
  streak: number;
  avatarUrl?: string;
};

export const Leaderboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('/api/leaderboard');
        const result = await response.json();
        
        if (result.success) {
          setStudents(result.data);
        } else {
          toast({
            title: "Error",
            description: result.message || "Failed to load leaderboard",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to connect to the server",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [toast]);

  const getMedalIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Trophy className="h-6 w-6 text-yellow-400" />;
      case 1:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-amber-700" />; 
      default:
        return <span className="text-sm font-medium text-gray-600 w-6 h-6 flex items-center justify-center">{position + 1}</span>;
    }
  };

  return (
    <Card className="w-full lg:max-w-md shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl text-center font-bold">
          <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-transparent bg-clip-text">
            Leaderboard
          </span>
        </CardTitle>
        <CardDescription className="text-center">
          Top students completing past papers
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center p-8">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        ) : students.length > 0 ? (
          <div className="space-y-4">
            {students.map((student, index) => (
              <div
                key={student.id}
                className={`flex items-center p-3 rounded-lg ${
                  index === 0
                    ? "bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-100"
                    : "hover:bg-slate-50"
                }`}
              >
                <div className="flex-shrink-0 mr-3">
                  {getMedalIcon(index)}
                </div>
                <div className="flex-shrink-0 mr-4">
                  {student.avatarUrl ? (
                    <img
                      src={student.avatarUrl}
                      alt={student.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <CircleUser className="h-10 w-10 text-slate-300" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {student.name}
                  </p>
                  <div className="flex items-center mt-1">
                    <p className="text-xs text-gray-500 mr-3">
                      {student.totalPoints} pts
                    </p>
                    {student.streak > 0 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-800">
                        <Flame className="mr-1 h-3 w-3 text-red-500" />
                        {student.streak} day streak
                      </span>
                    )}
                  </div>
                </div>
                <div className="ml-auto">
                  <p className="text-lg font-bold text-gray-900">
                    {index === 0 && "🏆"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No students yet. Be the first to complete papers and earn points!
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Leaderboard;