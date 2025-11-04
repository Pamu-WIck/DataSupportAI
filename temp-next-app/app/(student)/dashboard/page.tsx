"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { Trophy, Target, Flame, BookOpen, Video, Award } from "lucide-react";

/**
 * StudentDashboard - Landing page after successful login
 * Shows student progress, points, badges, and quick actions
 */
export default function StudentDashboard() {
  const { user } = useAuth();
  const studentProfile = user?.studentProfile;

  if (!studentProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-montserrat text-slate-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-playfair font-bold text-4xl text-slate-900 mb-2">
            Welcome back, {studentProfile.name}! 👋
          </h1>
          <p className="font-montserrat text-lg text-slate-600">
            Ready to continue your learning journey?
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="font-montserrat text-sm text-slate-500 font-medium">Total Points</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl text-slate-900 mb-1">
              {studentProfile.totalPoints}
            </h2>
            <p className="font-montserrat text-xs text-slate-500">Keep up the great work!</p>
          </motion.div>

          {/* Current Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
              <span className="font-montserrat text-sm text-slate-500 font-medium">Current Streak</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl text-slate-900 mb-1">
              {studentProfile.streak} days
            </h2>
            <p className="font-montserrat text-xs text-slate-500">Don't break the chain!</p>
          </motion.div>

          {/* School Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-teal-100 rounded-xl">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <span className="font-montserrat text-sm text-slate-500 font-medium">Year Level</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl text-slate-900 mb-1">
              Year {studentProfile.schoolYear || "N/A"}
            </h2>
            <p className="font-montserrat text-xs text-slate-500">Your current level</p>
          </motion.div>

          {/* Badges Earned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <span className="font-montserrat text-sm text-slate-500 font-medium">Badges Earned</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl text-slate-900 mb-1">
              {/* This will be fetched from API */}
              0
            </h2>
            <p className="font-montserrat text-xs text-slate-500">Collect them all!</p>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-playfair font-bold text-2xl text-slate-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Past Papers Card */}
            <Link href="/past-papers">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="p-4 bg-teal-100 rounded-xl mr-4">
                    <BookOpen className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-slate-900">
                      Practice Past Papers
                    </h3>
                    <p className="font-montserrat text-sm text-slate-500">
                      Access exam papers from 2018-2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                  <span className="font-montserrat text-sm font-medium text-teal-600">
                    Browse Papers →
                  </span>
                </div>
              </div>
            </Link>

            {/* Video Lessons Card */}
            <Link href="/video-lessons">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="p-4 bg-purple-100 rounded-xl mr-4">
                    <Video className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-slate-900">
                      Watch Video Lessons
                    </h3>
                    <p className="font-montserrat text-sm text-slate-500">
                      Learn from expert tutors
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                  <span className="font-montserrat text-sm font-medium text-purple-600">
                    Start Learning →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Recent Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8"
        >
          <h2 className="font-playfair font-bold text-2xl text-slate-900 mb-6">
            Recent Activity
          </h2>
          <div className="text-center py-12">
            <p className="font-montserrat text-slate-500">
              No recent activity yet. Start practising to see your progress here!
            </p>
            <Link href="/past-papers">
              <button className="mt-4 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-montserrat font-medium rounded-3xl transition-all transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
