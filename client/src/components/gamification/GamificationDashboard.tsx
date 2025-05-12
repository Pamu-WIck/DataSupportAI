import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Leaderboard } from './Leaderboard';
import { BadgeCollection } from './BadgeCollection';
import { Award, Trophy, History } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const GamificationDashboard = () => {
  // In a real app, this would come from authentication
  const currentStudentId = 1; // Mock student ID for demo purposes
  
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#2dd4bf] to-yellow-500 text-transparent bg-clip-text">
            Study Progress & Achievements
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your academic journey, earn badges, compete on the leaderboard, and celebrate your achievements.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Past Papers Completed" 
          value="42" 
          description="Keep going to reach your next milestone!"
          icon={<History className="h-4 w-4" />}
          trend={+15}
        />
        
        <StatsCard 
          title="Badges Earned" 
          value="8" 
          description="6 more badges to unlock!"
          icon={<Award className="h-4 w-4" />}
          trend={+2}
        />
        
        <StatsCard 
          title="Leaderboard Position" 
          value="#3" 
          description="You're in the top 10%"
          icon={<Trophy className="h-4 w-4" />}
          trend={+5}
        />
      </div>
      
      <Tabs defaultValue="badges">
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="badges" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span>Badge Collection</span>
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span>Leaderboard</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="badges" className="mt-0">
          <BadgeCollection studentId={currentStudentId} showLocked={true} />
        </TabsContent>
        
        <TabsContent value="leaderboard" className="mt-0">
          <div className="max-w-lg mx-auto">
            <Leaderboard />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: number;
}

const StatsCard = ({ title, value, description, icon, trend }: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="p-1 bg-background rounded-full">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        {trend !== undefined && (
          <div className={`flex items-center mt-1 text-xs ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}
            <span className="ml-1">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GamificationDashboard;