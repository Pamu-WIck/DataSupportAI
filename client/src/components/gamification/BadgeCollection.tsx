import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Award, Lock } from 'lucide-react';

type Badge = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  level: number;
  pointsAwarded: number;
  requirements: string;
};

type BadgeCollectionProps = {
  studentId?: number;
  showLocked?: boolean;
};

export const BadgeCollection = ({ studentId, showLocked = true }: BadgeCollectionProps) => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [allBadges, setAllBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        setLoading(true);
        
        // Fetch all badges
        const allBadgesResponse = await fetch('/api/badges');
        const allBadgesResult = await allBadgesResponse.json();
        
        if (allBadgesResult.success) {
          setAllBadges(allBadgesResult.data);
        }
        
        // If studentId is provided, fetch student's badges
        if (studentId) {
          const studentBadgesResponse = await fetch(`/api/students/${studentId}/badges`);
          const studentBadgesResult = await studentBadgesResponse.json();
          
          if (studentBadgesResult.success) {
            setBadges(studentBadgesResult.data);
          } else {
            toast({
              title: "Error",
              description: studentBadgesResult.message || "Failed to load badges",
              variant: "destructive",
            });
          }
        } else {
          // If no studentId, show all badges
          setBadges(allBadgesResult.data);
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

    fetchBadges();
  }, [studentId, toast]);

  // Function to get badge level CSS class
  const getBadgeLevelClass = (level: number) => {
    switch (level) {
      case 1: return "bg-amber-700"; // Bronze
      case 2: return "bg-gray-400"; // Silver
      case 3: return "bg-yellow-400"; // Gold
      default: return "bg-gray-200";
    }
  };
  
  // Function to get badge level name
  const getBadgeLevelName = (level: number) => {
    switch (level) {
      case 1: return "Bronze";
      case 2: return "Silver";
      case 3: return "Gold";
      default: return "Common";
    }
  };

  // Get badges to display (either earned or all)
  const getDisplayBadges = () => {
    if (!studentId || !showLocked) {
      // Just return earned badges
      return badges;
    }
    
    // Return all badges, marking which ones are earned
    return allBadges.map(badge => {
      const isEarned = badges.some(b => b.id === badge.id);
      return { ...badge, isEarned };
    });
  };

  const displayBadges = getDisplayBadges();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          <span className="bg-gradient-to-r from-[#2dd4bf] to-teal-500 text-transparent bg-clip-text">
            Badge Collection
          </span>
        </CardTitle>
        <CardDescription>
          Complete past papers and earn badges
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center p-8">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        ) : displayBadges.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {displayBadges.map((badge: any) => (
              <TooltipProvider key={badge.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={`relative flex flex-col items-center justify-center p-4 rounded-lg border ${
                      badge.isEarned === false ? 'opacity-50 grayscale' : 'border-teal-100 bg-teal-50'
                    }`}>
                      <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${getBadgeLevelClass(badge.level)}`} />
                      
                      {badge.imageUrl ? (
                        <img 
                          src={badge.imageUrl} 
                          alt={badge.name}
                          className="w-16 h-16 mb-2 object-contain" 
                        />
                      ) : (
                        <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-full bg-teal-100">
                          <Award className="w-10 h-10 text-teal-600" />
                        </div>
                      )}
                      
                      <h3 className="text-sm font-medium text-center line-clamp-1">
                        {badge.name}
                      </h3>
                      
                      {badge.isEarned === false && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-lg">
                          <Lock className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <div className="space-y-2 p-1">
                      <p className="font-bold">{badge.name}</p>
                      <p className="text-xs text-gray-500">{getBadgeLevelName(badge.level)} • {badge.category}</p>
                      <p className="text-sm">{badge.description}</p>
                      <p className="text-xs text-muted-foreground italic">
                        {badge.isEarned === false ? `How to earn: ${badge.requirements}` : `+${badge.pointsAwarded} points`}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No badges yet. Complete past papers to earn badges!
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BadgeCollection;