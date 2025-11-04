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
              <CardTitle>Your Learning Progress</CardTitle>
              <CardDescription>
                Track your learning journey across papers and videos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center justify-center py-6 text-center bg-slate-50 rounded-xl p-6">
                  <div className="rounded-full bg-yellow-100 p-4 mb-4">
                    <LucideTarget className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Past Papers Progress</h3>
                  <p className="text-slate-500 max-w-md mb-4">
                    Complete past papers and save your scores to track your progress over time.
                    Each paper you complete contributes to your total points and unlocks badges.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 border-teal-500 text-teal-500 hover:bg-teal-50"
                    onClick={() => window.location.href = "/past-papers"}
                  >
                    Go to Past Papers
                  </Button>
                </div>

                <div className="flex flex-col items-center justify-center py-6 text-center bg-slate-50 rounded-xl p-6">
                  <div className="rounded-full bg-purple-100 p-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Video Lessons Progress</h3>
                  <p className="text-slate-500 max-w-md mb-4">
                    Watch The Study Hive's video lessons to earn points and special video badges.
                    Each completed video adds to your knowledge and points.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 border-purple-500 text-purple-500 hover:bg-purple-50"
                    onClick={() => window.location.href = "/achievements?tab=videos"}
                  >
                    View Video Lessons
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold text-lg mb-4">Recent Video Completion Badges</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Video badges would be displayed here - this would come from real data in a full implementation */}
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="rounded-full bg-purple-100 p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Biology Video Star</div>
                      <div className="text-xs text-slate-500">3 videos completed</div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-teal-50 rounded-lg border border-teal-100">
                    <div className="rounded-full bg-teal-100 p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">First Video Badge</div>
                      <div className="text-xs text-slate-500">First video completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GamificationDashboard;