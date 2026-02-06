'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  Star, 
  ArrowRight,
  ChevronDown,
  Clock
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch('/api/courses').then(res => res.json()).then(setCourses);
  }, []);

  const categories = ['All', 'Mathematics', 'Science', 'English', 'Social Studies'];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#020617] pt-32 pb-20 px-6 lg:px-12 text-slate-100 overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-600/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <section className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Master Your <span className="text-gradient">Potential</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose from our premium selection of SHS and WASSCE courses designed by top Ghanaian educators to guarantee your academic success.
            </p>
          </motion.div>
        </section>

        {/* Filter & Search Bar */}
        <section className="mb-12">
           <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-4 rounded-[2rem]">
              {/* Category Toggles */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto px-2 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                      activeCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-glow' 
                      : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full lg:w-96 px-2">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Search courses or tutors..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-indigo-500 rounded-2xl py-3 pl-14 pr-6 text-slate-200 outline-none transition-all placeholder:text-slate-600"
                />
              </div>

              <button className="hidden lg:flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-2xl text-sm font-bold text-slate-300 hover:bg-slate-700 transition-all border border-slate-700">
                <Filter size={18} /> Sort: Featured <ChevronDown size={14} />
              </button>
           </div>
        </section>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-slate-900/30 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-glow relative"
              >
                {/* Course Image */}
                <div className="relative h-64 overflow-hidden">
                   <Link href={`/courses/${course.id}`}>
                    <Image 
                      src={course.image} 
                      alt={course.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                   </Link>
                   <div className="absolute top-6 left-6 px-4 py-1.5 bg-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {course.category}
                   </div>
                </div>

                {/* Course Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-bold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                       <Users size={16} />
                       <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <Link href={`/courses/${course.id}`}>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2 leading-tight">
                      {course.title}
                    </h3>
                  </Link>
                  <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" /> {course.instructor}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="flex items-center gap-3 bg-slate-950/40 p-3 rounded-2xl border border-slate-800/50">
                        <BookOpen size={16} className="text-indigo-400" />
                        <span className="text-xs font-semibold text-slate-300">{course.lessons} Lessons</span>
                     </div>
                     <div className="flex items-center gap-3 bg-slate-950/40 p-3 rounded-2xl border border-slate-800/50">
                        <Clock size={16} className="text-indigo-400" />
                        <span className="text-xs font-semibold text-slate-300">{course.duration}</span>
                     </div>
                  </div>

                  <Link href={`/courses/${course.id}`} className="flex items-center justify-center gap-3 w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-bold transition-all shadow-glow hover:scale-[1.02]">
                    Start Learning <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 px-6">
               <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600 border border-slate-800">
                 <Search size={32} />
               </div>
               <h3 className="text-2xl font-bold text-slate-400">No courses found</h3>
               <p className="text-slate-600 mt-2">Try adjusting your filters or search terms.</p>
               <button onClick={() => {setActiveCategory('All'); setSearchQuery('');}} className="mt-8 px-8 py-3 bg-indigo-600/10 text-indigo-400 rounded-xl font-bold border border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all">
                  Reset Filters
               </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
