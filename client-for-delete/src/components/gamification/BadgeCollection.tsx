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

function getBadgeBackgroundColor(badge: Badge): string {
  const category = badge.category.toLowerCase();
  const level = badge.level;
  
  if (category.includes('biology')) {
    return level === 3 ? 'bg-gradient-to-br from-teal-100 to-green-200' : 'bg-teal-100';
  } else if (category.includes('chemistry')) {
    return level === 3 ? 'bg-gradient-to-br from-purple-100 to-indigo-200' : 'bg-purple-100';
  } else if (category.includes('physics')) {
    return level === 3 ? 'bg-gradient-to-br from-orange-100 to-yellow-200' : 'bg-orange-100';
  } else if (category.includes('achievement')) {
    return level === 3 ? 'bg-gradient-to-br from-blue-100 to-sky-200' : 'bg-blue-100';
  } else if (category.includes('consistency')) {
    return level === 3 ? 'bg-gradient-to-br from-yellow-100 to-amber-200' : 'bg-yellow-100';
  } else if (category.includes('study')) {
    return level === 3 ? 'bg-gradient-to-br from-green-100 to-emerald-200' : 'bg-green-100';
  } else {
    return level === 3 ? 'bg-gradient-to-br from-slate-100 to-slate-200' : 'bg-slate-100';
  }
}

function renderBadgeIcon(badge: Badge, isLocked: boolean): React.ReactNode {
  const nameToLower = badge.name.toLowerCase();
  const categoryToLower = badge.category.toLowerCase();
  const iconClass = `h-full w-full ${isLocked ? 'text-slate-400' : getLevelColor(badge.level)}`;
  
  // Biology-related icons
  if (categoryToLower.includes('biology')) {
    if (nameToLower.includes('cell') || nameToLower.includes('dna')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    );
  }
  
  // Chemistry-related icons
  if (categoryToLower.includes('chemistry')) {
    if (nameToLower.includes('tube') || nameToLower.includes('molar')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    );
  }
  
  // Physics-related icons
  if (categoryToLower.includes('physics')) {
    if (nameToLower.includes('quantum') || nameToLower.includes('particle')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    );
  }
  
  // Achievement-related icons
  if (categoryToLower.includes('achievement')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    );
  }

  // Consistency-related icons
  if (categoryToLower.includes('consistency')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  
  // Default hexagon icon for other badges
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
      <path d="M21 16V8.00002C21 7.26565 20.7366 6.53869 20.2 5.99998L13.2 3.99998L12 3L10.8 3.99998L3.8 5.99998C3.26344 6.53869 3 7.26565 3 8.00002V16C3 16.7344 3.26344 17.4613 3.8 18L10.8 20L12 21L13.2 20L20.2 18C20.7366 17.4613 21 16.7344 21 16Z" 
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

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
      name: "Cellular Rookie",
      description: "Complete 3 Biology past papers",
      imageUrl: "/assets/badges/biology-beginner.svg",
      category: "Biology",
      level: 1,
      pointsAwarded: 100,
      requirements: "Complete 3 Biology papers"
    },
    {
      id: 3,
      name: "Beaker Breaker",
      description: "Complete 3 Chemistry past papers",
      imageUrl: "/assets/badges/chemistry-explorer.svg",
      category: "Chemistry",
      level: 1,
      pointsAwarded: 100,
      requirements: "Complete 3 Chemistry papers"
    },
    {
      id: 4,
      name: "Quantum Jumper",
      description: "Complete 3 Physics past papers",
      imageUrl: "/assets/badges/physics-pioneer.svg",
      category: "Physics",
      level: 1,
      pointsAwarded: 100,
      requirements: "Complete 3 Physics papers"
    },
    {
      id: 5,
      name: "Lab Rat",
      description: "Log in for 3 consecutive days",
      imageUrl: "/assets/badges/streaker.svg",
      category: "Consistency",
      level: 1,
      pointsAwarded: 75,
      requirements: "Log in for 3 consecutive days"
    },
    {
      id: 6,
      name: "Einstein's Heir",
      description: "Score 100% on any past paper",
      imageUrl: "/assets/badges/perfect-score.svg",
      category: "Achievement",
      level: 2,
      pointsAwarded: 200,
      requirements: "Score 100% on any past paper"
    },
    {
      id: 7,
      name: "DNA Decoder",
      description: "Complete 10 Biology past papers",
      imageUrl: "/assets/badges/biology-adept.svg",
      category: "Biology",
      level: 2,
      pointsAwarded: 250,
      requirements: "Complete 10 Biology papers"
    },
    {
      id: 8,
      name: "A-Level Alchemist",
      description: "Complete 5 A-Level papers",
      imageUrl: "/assets/badges/a-level-achiever.svg",
      category: "Achievement",
      level: 2,
      pointsAwarded: 300,
      requirements: "Complete 5 A-Level papers"
    },
    {
      id: 9,
      name: "Molecule Maestro",
      description: "Complete 10 Chemistry past papers",
      imageUrl: "/assets/badges/chemistry-master.svg",
      category: "Chemistry",
      level: 2,
      pointsAwarded: 250,
      requirements: "Complete 10 Chemistry papers"
    },
    {
      id: 10,
      name: "Gravity Guru",
      description: "Complete 10 Physics past papers",
      imageUrl: "/assets/badges/physics-master.svg",
      category: "Physics",
      level: 2,
      pointsAwarded: 250,
      requirements: "Complete 10 Physics papers"
    },
    {
      id: 11,
      name: "Photosynthesis Phenom",
      description: "Score over 90% on 3 Biology papers",
      imageUrl: "/assets/badges/biology-genius.svg",
      category: "Biology",
      level: 3,
      pointsAwarded: 350,
      requirements: "Score over 90% on 3 Biology papers"
    },
    {
      id: 12,
      name: "Periodic Table Prodigy",
      description: "Score over 90% on 3 Chemistry papers",
      imageUrl: "/assets/badges/chemistry-genius.svg",
      category: "Chemistry",
      level: 3,
      pointsAwarded: 350,
      requirements: "Score over 90% on 3 Chemistry papers"
    },
    {
      id: 13,
      name: "Quantum Conqueror",
      description: "Score over 90% on 3 Physics papers",
      imageUrl: "/assets/badges/physics-genius.svg",
      category: "Physics",
      level: 3,
      pointsAwarded: 350,
      requirements: "Score over 90% on 3 Physics papers"
    },
    {
      id: 14,
      name: "Science Savant",
      description: "Complete papers from all three science subjects",
      imageUrl: "/assets/badges/science-savant.svg",
      category: "Achievement",
      level: 2,
      pointsAwarded: 275,
      requirements: "Complete at least one paper from Biology, Chemistry, and Physics"
    },
    {
      id: 15,
      name: "Atomic Achiever",
      description: "Complete 25 past papers across all subjects",
      imageUrl: "/assets/badges/atomic-achiever.svg",
      category: "Achievement",
      level: 3,
      pointsAwarded: 400,
      requirements: "Complete 25 past papers total"
    },
    {
      id: 16,
      name: "Newton's Notebook",
      description: "Generate study notes for 5 different papers",
      imageUrl: "/assets/badges/newtons-notebook.svg",
      category: "Study Habits",
      level: 1,
      pointsAwarded: 150,
      requirements: "Generate study notes for 5 different papers"
    },
    {
      id: 17,
      name: "Marie Curie's Mindset",
      description: "Maintain a 7-day streak of daily study",
      imageUrl: "/assets/badges/curie-mindset.svg",
      category: "Consistency",
      level: 2,
      pointsAwarded: 225,
      requirements: "Maintain a 7-day streak of daily study"
    },
    {
      id: 18,
      name: "Darwin's Determination",
      description: "Complete a full series of papers for one exam board",
      imageUrl: "/assets/badges/darwin-determination.svg",
      category: "Achievement",
      level: 3,
      pointsAwarded: 375,
      requirements: "Complete all papers from one exam board for any subject"
    },
    {
      id: 19,
      name: "Microscope Master",
      description: "Complete all KS3 Biology papers",
      imageUrl: "/assets/badges/microscope-master.svg",
      category: "Biology",
      level: 2,
      pointsAwarded: 200,
      requirements: "Complete all KS3 Biology papers"
    },
    {
      id: 20,
      name: "Test Tube Titan",
      description: "Complete all KS3 Chemistry papers",
      imageUrl: "/assets/badges/test-tube-titan.svg",
      category: "Chemistry",
      level: 2,
      pointsAwarded: 200,
      requirements: "Complete all KS3 Chemistry papers"
    },
    {
      id: 21,
      name: "Particle Accelerator",
      description: "Complete 5 Physics papers in a single day",
      imageUrl: "/assets/badges/particle-accelerator.svg",
      category: "Physics",
      level: 3,
      pointsAwarded: 325,
      requirements: "Complete 5 Physics papers in a single day"
    },
    {
      id: 22,
      name: "Schrodinger's Student",
      description: "Complete the same Physics paper twice with different scores",
      imageUrl: "/assets/badges/schrodingers-student.svg",
      category: "Physics",
      level: 2,
      pointsAwarded: 175,
      requirements: "Complete the same Physics paper twice with different scores"
    },
    {
      id: 23,
      name: "Nuclear Reactor",
      description: "Score over 80% on all GCSE Physics papers",
      imageUrl: "/assets/badges/nuclear-reactor.svg",
      category: "Physics",
      level: 3,
      pointsAwarded: 350,
      requirements: "Score over 80% on all GCSE Physics papers"
    },
    {
      id: 24,
      name: "Molar Master",
      description: "Get 100% on any Chemistry calculation questions",
      imageUrl: "/assets/badges/molar-master.svg",
      category: "Chemistry",
      level: 3,
      pointsAwarded: 300,
      requirements: "Get 100% on any Chemistry calculation questions"
    },
    {
      id: 25,
      name: "Cell Division Expert",
      description: "Complete all GCSE Biology papers on genetics and cell division",
      imageUrl: "/assets/badges/cell-division.svg",
      category: "Biology",
      level: 2,
      pointsAwarded: 225,
      requirements: "Complete all GCSE Biology papers on genetics and cell division"
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
                    <div className={`w-16 h-16 rounded-full p-3 mb-3 flex items-center justify-center
                      ${isLocked ? 'bg-slate-100' : getBadgeBackgroundColor(badge)}`}>
                      {renderBadgeIcon(badge, isLocked)}
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