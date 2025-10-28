import { Link } from "wouter";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";
import {
  Users,
  FileText,
  Video,
  Award,
  TrendingUp,
  Activity,
  Settings,
  BarChart3
} from "lucide-react";

/**
 * AdminDashboard - Landing page for admin users after successful login
 * Shows platform metrics, recent activity, and management options
 */
const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-playfair font-bold text-4xl text-slate-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="font-montserrat text-lg text-slate-600">
            Welcome back, {user?.email}
          </p>
        </motion.div>

        {/* Platform Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Students */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h2 className="font-playfair font-bold text-3xl text-slate-900 mb-1">
              {/* This will be fetched from API */}
              0
            </h2>
            <p className="font-montserrat text-sm text-slate-500 font-medium">Total Students</p>
            <p className="font-montserrat text-xs text-green-600 mt-2">+0 this month</p>
          </motion.div>

          {/* Total Papers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-teal-100 rounded-xl">
                <FileText className="w-6 h-6 text-teal-600" />
              </div>
              <Activity className="w-5 h-5 text-teal-500" />
            </div>
            <h2 className="font-playfair font-bold text-3xl text-slate-900 mb-1">
              {/* This will be fetched from API */}
              0
            </h2>
            <p className="font-montserrat text-sm text-slate-500 font-medium">Past Papers</p>
            <p className="font-montserrat text-xs text-slate-400 mt-2">Available for download</p>
          </motion.div>

          {/* Total Videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Video className="w-6 h-6 text-purple-600" />
              </div>
              <Activity className="w-5 h-5 text-purple-500" />
            </div>
            <h2 className="font-playfair font-bold text-3xl text-slate-900 mb-1">
              {/* This will be fetched from API */}
              0
            </h2>
            <p className="font-montserrat text-sm text-slate-500 font-medium">Video Lessons</p>
            <p className="font-montserrat text-xs text-slate-400 mt-2">Across all subjects</p>
          </motion.div>

          {/* Total Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <Activity className="w-5 h-5 text-yellow-500" />
            </div>
            <h2 className="font-playfair font-bold text-3xl text-slate-900 mb-1">
              {/* This will be fetched from API */}
              0
            </h2>
            <p className="font-montserrat text-sm text-slate-500 font-medium">Badges Available</p>
            <p className="font-montserrat text-xs text-slate-400 mt-2">Achievement system</p>
          </motion.div>
        </div>

        {/* Management Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-playfair font-bold text-2xl text-slate-900 mb-4">
            Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Student Management */}
            <Link href="/admin/students">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer">
                <div className="p-4 bg-blue-100 rounded-xl w-fit mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-slate-900 mb-2">
                  Manage Students
                </h3>
                <p className="font-montserrat text-sm text-slate-500 mb-4">
                  View, edit, and manage student accounts
                </p>
                <span className="font-montserrat text-sm font-medium text-blue-600">
                  View Students →
                </span>
              </div>
            </Link>

            {/* Content Management */}
            <Link href="/admin/papers">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer">
                <div className="p-4 bg-teal-100 rounded-xl w-fit mb-4">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-slate-900 mb-2">
                  Manage Content
                </h3>
                <p className="font-montserrat text-sm text-slate-500 mb-4">
                  Upload papers, videos, and resources
                </p>
                <span className="font-montserrat text-sm font-medium text-teal-600">
                  Manage Content →
                </span>
              </div>
            </Link>

            {/* Analytics */}
            <Link href="/admin/analytics">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer">
                <div className="p-4 bg-purple-100 rounded-xl w-fit mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-slate-900 mb-2">
                  Analytics
                </h3>
                <p className="font-montserrat text-sm text-slate-500 mb-4">
                  View platform statistics and insights
                </p>
                <span className="font-montserrat text-sm font-medium text-purple-600">
                  View Analytics →
                </span>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-playfair font-bold text-2xl text-slate-900">
              Recent Activity
            </h2>
            <Link href="/admin/logs">
              <button className="font-montserrat text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                View All Logs →
              </button>
            </Link>
          </div>
          <div className="text-center py-12">
            <Activity className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="font-montserrat text-slate-500">
              No recent activity to display
            </p>
            <p className="font-montserrat text-sm text-slate-400 mt-2">
              Activity logs will appear here once actions are performed
            </p>
          </div>
        </motion.div>

        {/* Settings Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 text-center"
        >
          <Link href="/admin/settings">
            <button className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-montserrat font-medium rounded-3xl border-2 border-slate-300 transition-all transform hover:scale-105">
              <Settings className="w-5 h-5 mr-2" />
              Platform Settings
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
