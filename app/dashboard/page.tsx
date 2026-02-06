'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  BookOpen, 
  Award, 
  Clock, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2,
  Calendar,
  Zap
} from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  const [userData, setUserData] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    // Fetch mock data
    fetch('/api/user/profile').then(res => res.json()).then(setUserData);
    fetch('/api/courses').then(res => res.json()).then(setCourses);
  }, []);

  if (!userData) return <div className="min-h-screen bg-[#020617] flex items-center justify-center">
    <div className="animate-pulse text-indigo-500 font-bold text-xl uppercase tracking-widest">Initialising Brain...</div>
  </div>;

  const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100);

  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-12 px-6 lg:px-12 text-slate-100 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Welcome back, <span className="text-gradient">Kwame</span> 👋
            </h1>
            <p className="text-slate-400 text-lg">You&apos;re currently in the top <span className="text-indigo-400 font-semibold">5%</span> of learners this week.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-2 rounded-2xl"
          >
             <div className="flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <Zap size={18} className="text-indigo-400" />
                <span className="font-bold text-indigo-100">{userData.streak} Day Streak</span>
             </div>
             <div className="h-8 w-px bg-slate-800" />
             <div className="flex items-center gap-3 px-4 py-2">
                <Award size={18} className="text-amber-400" />
                <span className="font-bold text-slate-100">{userData.totalPoints} PTS</span>
             </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Resume Learning Section */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Continue Learning</h2>
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-1 transition-all">
                  View all <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inProgressCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                        <Play size={24} fill="currentColor" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-indigo-300 transition-colors">{course.title}</h3>
                        <p className="text-sm text-slate-500">{course.instructor} • {course.lessons} Lessons</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>Course Progress</span>
                        <span className="text-indigo-400 font-bold">{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" 
                        />
                      </div>
                    </div>

                    <button className="mt-6 w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white">
                      Resume Now <ArrowUpRight size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Quick Actions / Categories */}
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {[
                 { label: 'Live Q&A', icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-400/10' },
                 { label: 'Quizzes', icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                 { label: 'Calendar', icon: Calendar, color: 'text-orange-400', bg: 'bg-orange-400/10' },
                 { label: 'Mentors', icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-400/10' },
               ].map((item, i) => (
                 <button key={i} className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/60 transition-all hover:scale-105">
                   <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center`}>
                      <item.icon size={24} />
                   </div>
                   <span className="text-sm font-semibold">{item.label}</span>
                 </button>
               ))}
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="space-y-8">
            {/* Stats Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl" />
              <h3 className="text-xl font-bold mb-8">Performance</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Studied</p>
                      <p className="font-bold">{userData.stats.hoursStudied}h</p>
                    </div>
                  </div>
                  <TrendingUp className="text-green-400" size={20} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Completed</p>
                      <p className="font-bold">{userData.stats.coursesCompleted} Courses</p>
                    </div>
                  </div>
                  <div className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">+1</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Quiz Score</p>
                      <p className="font-bold">{userData.stats.quizAverage}% Avg</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center gap-4">
                 <div className="w-12 h-12 bg-indigo-500 flex items-center justify-center rounded-xl text-white">
                    <Zap size={24} fill="currentColor" />
                 </div>
                 <div>
                    <h4 className="font-bold text-sm">Elite League</h4>
                    <p className="text-[10px] text-indigo-200">You are 250 points away from Diamond rank!</p>
                 </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-[2.5rem] bg-slate-900/40 p-8 border border-slate-800">
               <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
               <div className="space-y-6">
                 {userData.recentActivity.map((activity: any) => (
                   <div key={activity.id} className="flex gap-4 relative">
                      <div className="w-px h-full bg-slate-800 absolute left-[11px] top-6" />
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center relative z-10">
                        <div className="w-2 h-2 bg-white rounded-full shadow-glow" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-200">{activity.action}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{activity.detail}</p>
                        <p className="text-[10px] text-indigo-400/80 mt-1 uppercase font-bold tracking-tighter">{activity.date}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
