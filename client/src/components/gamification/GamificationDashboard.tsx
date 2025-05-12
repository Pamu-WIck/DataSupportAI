import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaderboard } from './Leaderboard';
import { BadgeCollection } from './BadgeCollection';
import { PaperCompletionChart } from './PaperCompletionChart';
import { Button } from '@/components/ui/button';
import { LucideBarChart2, LucideBadge, LucideTrophy, LucideTarget } from 'lucide-react';

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
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-lg bg-slate-100 p-1.5 text-slate-700">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-slate-500 mt-1 flex items-center">
          {description}
          {trend !== undefined && (
            <span className={`ml-2 flex items-center text-xs ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </span>
          )}
        </p>
      </CardContent>
    </Card>
  );
};

const GamificationDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // In a real application, this would be fetched from the API
  const studentId = 1; // Mock ID for demonstration
  
  return (
    <div className="space-y-8">
      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview" className="flex items-center justify-center gap-2">
            <LucideBarChart2 className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="badges" className="flex items-center justify-center gap-2">
            <LucideBadge className="h-4 w-4" />
            <span className="hidden sm:inline">Badges</span>
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex items-center justify-center gap-2">
            <LucideTrophy className="h-4 w-4" />
            <span className="hidden sm:inline">Leaderboard</span>
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex items-center justify-center gap-2">
            <LucideTarget className="h-4 w-4" />
            <span className="hidden sm:inline">Progress</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard 
              title="Total Points" 
              value="1,250" 
              description="Points earned from completing papers"
              icon={<LucideBarChart2 className="h-4 w-4" />}
              trend={12}
            />
            <StatsCard 
              title="Current Streak" 
              value="8 days" 
              description="Consecutive days of activity"
              icon={<LucideTarget className="h-4 w-4" />}
              trend={5}
            />
            <StatsCard 
              title="Badges Earned" 
              value="15/32" 
              description="Achievements unlocked"
              icon={<LucideBadge className="h-4 w-4" />}
            />
            <StatsCard 
              title="Leaderboard Position" 
              value="5th" 
              description="Out of 120 students"
              icon={<LucideTrophy className="h-4 w-4" />}
              trend={-2}
            />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Paper Completions</CardTitle>
                <CardDescription>Your activity across subjects over time</CardDescription>
              </CardHeader>
              <CardContent>
                <PaperCompletionChart />
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Badges</CardTitle>
                <CardDescription>Your latest achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <BadgeCollection studentId={studentId} showLocked={false} />
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setActiveTab("badges")}
                  >
                    View All Badges
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="badges" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievement Badges</CardTitle>
              <CardDescription>
                Collect badges by completing activities and reaching milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BadgeCollection studentId={studentId} showLocked={true} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="leaderboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Leaderboard</CardTitle>
              <CardDescription>
                See how you rank against other students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Leaderboard />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>
                Track your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-yellow-100 p-6 mb-4">
                  <LucideTarget className="h-12 w-12 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
                <p className="text-slate-500 max-w-md">
                  Complete past papers and save your scores to track your progress over time.
                  Each paper you complete contributes to your total points and unlocks new badges.
                </p>
                <Button 
                  className="mt-8 bg-teal-500 hover:bg-teal-600"
                  onClick={() => window.location.href = "/past-papers"}
                >
                  Go to Past Papers
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GamificationDashboard;