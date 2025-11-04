"use client";

import GamificationDashboard from '@/components/gamification/GamificationDashboard';
import ScrollAnimation from '@/components/ui/scroll-animation';
import { VideoLessonsGrid } from '@/components/gamification/VideoLessonsGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from 'next';

// The Study Hive YouTube video lessons data
const studyHiveVideoLessons = [
  {
    id: "WC3TiPRECTI",
    title: "Immune System | GCSE | IGCSE Biology",
    subject: "Biology",
    topic: "Immune System",
    thumbnailUrl: `https://i.ytimg.com/vi/WC3TiPRECTI/hqdefault.jpg`,
    duration: "13:42",
    description: "Learn about the immune system, including white blood cells, antibodies, and the immune response in GCSE and IGCSE Biology."
  },
  {
    id: "mU9PGceV_yk",
    title: "Vaccinations | GCSE / IGCSE Biology",
    subject: "Biology",
    topic: "Vaccinations",
    thumbnailUrl: `https://i.ytimg.com/vi/mU9PGceV_yk/hqdefault.jpg`,
    duration: "9:21",
    description: "Understand the science of vaccinations and how they help protect against diseases in this GCSE/IGCSE Biology lesson."
  },
  {
    id: "jg4LsY5Re78",
    title: "Hormones & the Endocrine System (Part 2) | GCSE / IGCSE Biology",
    subject: "Biology",
    topic: "Hormones & Endocrine System",
    thumbnailUrl: `https://i.ytimg.com/vi/jg4LsY5Re78/hqdefault.jpg`,
    duration: "12:15",
    description: "Continue learning about hormones and the endocrine system in this second part of the GCSE/IGCSE Biology topic."
  },
  {
    id: "Kfwf-Cow7_M",
    title: "Hormones & the Endocrine System (Part 1) | GCSE/ IGCSE Biology",
    subject: "Biology",
    topic: "Hormones & Endocrine System",
    thumbnailUrl: `https://i.ytimg.com/vi/Kfwf-Cow7_M/hqdefault.jpg`,
    duration: "10:02",
    description: "Introduction to hormones and the endocrine system for GCSE and IGCSE Biology students."
  },
  {
    id: "Ww2pi_NPQOQ",
    title: "Required Practical for Photosynthesis | GCSE / IGCSE Biology",
    subject: "Biology",
    topic: "Photosynthesis",
    thumbnailUrl: `https://i.ytimg.com/vi/Ww2pi_NPQOQ/hqdefault.jpg`,
    duration: "11:35",
    description: "Learn how to conduct the required practical experiment for photosynthesis in this GCSE/IGCSE Biology lesson."
  },
  {
    id: "UzTXecGcY1Q",
    title: "Structure of a Leaf | GCSE / IGCSE Biology",
    subject: "Biology",
    topic: "Plant Structure",
    thumbnailUrl: `https://i.ytimg.com/vi/UzTXecGcY1Q/hqdefault.jpg`,
    duration: "8:54",
    description: "Explore the detailed structure of a leaf and its functions in this GCSE/IGCSE Biology lesson."
  }
];

export const metadata: Metadata = {
  title: "Student Achievements | The Study Hive",
  description: "Track your academic achievements, earn badges, and compete on the leaderboard as you master GCSE and A-Level science subjects.",
};

export default function GamificationPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation variant="fadeUp">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#2dd4bf] to-yellow-500 text-transparent bg-clip-text">
                  Your Learning Journey
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp" delay={0.1}>
              <p className="text-lg text-slate-700 mb-8">
                Track your progress, earn rewards, and rise up the ranks as you master science subjects.
                The more you learn and practice, the more achievements you'll unlock.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="dashboard" className="mb-12">
            <ScrollAnimation variant="fadeUp" delay={0.2}>
              <TabsList className="grid grid-cols-2 max-w-[400px] mx-auto">
                <TabsTrigger value="dashboard">Stats & Badges</TabsTrigger>
                <TabsTrigger value="videos">Video Lessons</TabsTrigger>
              </TabsList>
            </ScrollAnimation>

            <TabsContent value="dashboard" className="mt-6">
              <ScrollAnimation variant="fadeUp" delay={0.3}>
                <GamificationDashboard />
              </ScrollAnimation>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <ScrollAnimation variant="fadeUp" delay={0.3}>
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold mb-3">Science Video Lessons</h2>
                    <p className="text-muted-foreground">
                      Watch these educational videos to earn points and badges. You'll receive 25 base points for each video,
                      with bonus points for completing the entire lesson.
                    </p>
                  </div>

                  <VideoLessonsGrid
                    studentId={1} // In a real app, this would be the logged-in student's ID
                    videos={studyHiveVideoLessons}
                  />
                </div>
              </ScrollAnimation>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Info section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation variant="fadeUp">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                How to Earn Achievements
              </h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-4 gap-6 mt-10">
              <ScrollAnimation variant="fadeUp" delay={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Complete Past Papers</h3>
                  <p className="text-gray-600">
                    Mark papers as complete and log your scores to earn points and unlock subject-specific badges.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeUp" delay={0.2}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Watch Video Lessons</h3>
                  <p className="text-gray-600">
                    Complete online lessons to earn points and special video completion badges in your favorite subjects.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeUp" delay={0.3}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Maintain Streaks</h3>
                  <p className="text-gray-600">
                    Study consistently by completing papers or watching videos daily to build your streak for bonus points.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeUp" delay={0.4}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Climb the Leaderboard</h3>
                  <p className="text-gray-600">
                    Compete with other students and earn your place at the top of the leaderboard.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
