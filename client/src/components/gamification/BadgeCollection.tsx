import { useState } from "react";
import { Badge as BadgeUI } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useQuery } from "@tanstack/react-query";

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch badges for the student
  const { data: badges = [], isLoading } = useQuery<Badge[]>({
    queryKey: studentId 
      ? ['/api/students', studentId, 'badges'] 
      : ['/api/badges'],
    enabled: !!studentId || showLocked
  });

  // For demo purposes, if no badges are available through the API
  const demoBadges: Badge[] = [
    {
      id: 1,
      name: "First Step",
      description: "Complete your first past paper",
      imageUrl: "/assets/badges/first-step.svg",
      category: "Paper Completion",
      level: 1,
      pointsAwarded: 50,
      requirements: "Complete 1 past paper"
    },
    {
      id: 2,
      name: "Biology Beginner",
      description: "Complete 3 Biology past papers",
      imageUrl: "/assets/badges/biology-beginner.svg",
      category: "Biology",
      level: 1,
      pointsAwarded: 100,
      requirements: "Complete 3 Biology papers"
    },
    {
      id: 3,
      name: "Chemistry Explorer",
      description: "Complete 3 Chemistry past papers",
      imageUrl: "/assets/badges/chemistry-explorer.svg",
      category: "Chemistry",
      level: 1,
      pointsAwarded: 100,
      requirements: "Complete 3 Chemistry papers"
    },
    {
      id: 4,
      name: "Physics Pioneer",
      description: "Complete 3 Physics past papers",
      imageUrl: "/assets/badges/physics-pioneer.svg",
      category: "Physics",
      level: 1,
      pointsAwarded: 100,
      requirements: "Complete 3 Physics papers"
    },
    {
      id: 5,
      name: "Streaker",
      description: "Log in for 3 consecutive days",
      imageUrl: "/assets/badges/streaker.svg",
      category: "Consistency",
      level: 1,
      pointsAwarded: 75,
      requirements: "Log in for 3 consecutive days"
    },
    {
      id: 6,
      name: "Perfect Score",
      description: "Score 100% on any past paper",
      imageUrl: "/assets/badges/perfect-score.svg",
      category: "Achievement",
      level: 2,
      pointsAwarded: 200,
      requirements: "Score 100% on any past paper"
    },
    {
      id: 7,
      name: "Biology Adept",
      description: "Complete 10 Biology past papers",
      imageUrl: "/assets/badges/biology-adept.svg",
      category: "Biology",
      level: 2,
      pointsAwarded: 250,
      requirements: "Complete 10 Biology papers"
    },
    {
      id: 8,
      name: "A-Level Achiever",
      description: "Complete 5 A-Level papers",
      imageUrl: "/assets/badges/a-level-achiever.svg",
      category: "Achievement",
      level: 2,
      pointsAwarded: 300,
      requirements: "Complete 5 A-Level papers"
    }
  ];

  // Use actual badges if available, otherwise use demo badges
  const displayBadges = badges.length > 0 ? badges : demoBadges;
  
  // Get unique categories
  const categories = Array.from(new Set(displayBadges.map(badge => badge.category)));
  
  const filteredBadges = selectedCategory 
    ? displayBadges.filter(badge => badge.category === selectedCategory)
    : displayBadges;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        <BadgeUI 
          className={`cursor-pointer ${!selectedCategory ? 'bg-teal-500 hover:bg-teal-600' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </BadgeUI>
        
        {categories.map(category => (
          <BadgeUI 
            key={category}
            className={`cursor-pointer ${selectedCategory === category ? 'bg-teal-500 hover:bg-teal-600' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </BadgeUI>
        ))}
      </div>
      
      {/* Badges grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredBadges.map(badge => {
          const isLocked = badge.id % 2 !== 0; // For demo purposes, alternating badges are locked
          
          if (!showLocked && isLocked) {
            return null;
          }
          
          return (
            <TooltipProvider key={badge.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className={`p-4 flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-md ${isLocked ? 'opacity-50 grayscale' : ''}`}>
                    <div className="w-16 h-16 rounded-full bg-slate-100 p-3 mb-3 flex items-center justify-center">
                      {/* Placeholder hexagon icon for badges */}
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`h-full w-full ${isLocked ? 'text-slate-400' : getLevelColor(badge.level)}`}>
                        <path d="M21 16V8.00002C21 7.26565 20.7366 6.53869 20.2 5.99998L13.2 3.99998L12 3L10.8 3.99998L3.8 5.99998C3.26344 6.53869 3 7.26565 3 8.00002V16C3 16.7344 3.26344 17.4613 3.8 18L10.8 20L12 21L13.2 20L20.2 18C20.7366 17.4613 21 16.7344 21 16Z" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold">{badge.name}</h3>
                    {isLocked ? (
                      <BadgeUI variant="outline" className="mt-2 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Locked
                      </BadgeUI>
                    ) : (
                      <BadgeUI variant="default" className={`mt-2 text-xs ${getLevelBadgeColor(badge.level)}`}>
                        Level {badge.level}
                      </BadgeUI>
                    )}
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="p-2">
                    <h4 className="font-bold text-sm">{badge.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{badge.description}</p>
                    {isLocked && (
                      <div className="mt-2 text-xs text-slate-400 italic">
                        <span className="font-semibold">Requirements:</span> {badge.requirements}
                      </div>
                    )}
                    {!isLocked && (
                      <div className="mt-2 text-xs text-green-500">
                        +{badge.pointsAwarded} points earned
                      </div>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

// Helper functions for badge styling
function getLevelColor(level: number): string {
  switch (level) {
    case 1: return 'text-yellow-500';
    case 2: return 'text-teal-500';
    case 3: return 'text-purple-500';
    default: return 'text-blue-500';
  }
}

function getLevelBadgeColor(level: number): string {
  switch (level) {
    case 1: return 'bg-yellow-500 hover:bg-yellow-600';
    case 2: return 'bg-teal-500 hover:bg-teal-600';
    case 3: return 'bg-purple-500 hover:bg-purple-600';
    default: return 'bg-blue-500 hover:bg-blue-600';
  }
}