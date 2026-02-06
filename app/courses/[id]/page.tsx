'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  ChevronLeft, 
  MessageSquare, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  Lock,
  ArrowRight,
  Maximize2,
  Settings,
  Volume2,
  Star
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CourseLearningPage() {
  const { id } = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<any>(null);
  const [activeLesson, setActiveLesson] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    fetch('/api/courses').then(res => res.json()).then(data => {
      const found = data.find((c: any) => c.id === id);
      setCourse(found);
    });
  }, [id]);

  if (!course) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
       <div className="animate-pulse text-indigo-500 font-bold uppercase tracking-widest">Loading Cinema...</div>
    </div>
  );

  const lessons = [
    { title: 'Introduction to Theory', duration: '12:05', completed: true },
    { title: 'The Core Concepts of A1', duration: '45:20', completed: true },
    { title: 'Advanced Problem Solving', duration: '32:15', active: true },
    { title: 'Common WASSCE Pitfalls', duration: '28:40', locked: true },
    { title: 'Mock Exam Analysis', duration: '55:00', locked: true },
    { title: 'Final Summary', duration: '15:10', locked: true },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 flex flex-col lg:flex-row h-screen pt-20">
      {/* Lesson Navigation (Sidebar on Desktop, Bottom on Mobile) */}
      <aside className="w-full lg:w-96 bg-slate-950/80 border-r border-slate-800 flex flex-col h-full overflow-hidden order-2 lg:order-1">
         <div className="p-8 border-b border-slate-800">
            <button onClick={() => router.push('/courses')} className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 mb-6 text-sm font-bold transition-all">
               <ChevronLeft size={16} /> Back to Catalog
            </button>
            <h1 className="text-xl font-black leading-tight mb-2 truncate">{course.title}</h1>
            <div className="flex items-center gap-3">
               <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500" style={{ width: '33%' }} />
               </div>
               <span className="text-[10px] font-black uppercase text-indigo-400">33% Done</span>
            </div>
         </div>

         <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            {lessons.map((lesson, idx) => (
              <button 
                key={idx}
                onClick={() => !lesson.locked && setActiveLesson(idx)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                  idx === activeLesson 
                  ? 'bg-indigo-600 shadow-glow text-white' 
                  : lesson.locked 
                    ? 'opacity-40 cursor-not-allowed' 
                    : 'hover:bg-slate-900 border border-transparent hover:border-slate-800'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  idx === activeLesson ? 'bg-white/20' : 'bg-slate-800 text-slate-400'
                }`}>
                  {lesson.completed ? <CheckCircle2 size={16} /> : lesson.locked ? <Lock size={16} /> : <Play size={16} fill={idx === activeLesson ? "white" : "none"} />}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-xs font-black uppercase tracking-tighter opacity-60 mb-0.5">Lesson {idx + 1}</p>
                  <p className="text-sm font-bold leading-tight line-clamp-1">{lesson.title}</p>
                </div>
                <span className="text-[10px] font-bold opacity-40">{lesson.duration}</span>
              </button>
            ))}
         </div>

         <div className="p-6 bg-slate-900/40 border-t border-slate-800">
            <button className="w-full py-4 bg-slate-800 hover:bg-slate-700 rounded-[1.2rem] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border border-slate-700">
               <FileText size={16} /> Download Resources
            </button>
         </div>
      </aside>

      {/* Main Video Content Area */}
      <section className="flex-1 flex flex-col h-full bg-black relative order-1 lg:order-2 overflow-hidden">
         {/* Custom Video Player UI (Mocked) */}
         <div className="relative flex-1 group">
            <Image 
              src={course.image} 
              alt="Video Poster" 
              fill 
              className="object-cover opacity-60 transition-opacity group-hover:opacity-40"
            />
            
            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.button 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-glow border-4 border-white/20 relative group/play z-10"
               >
                  <Play size={40} fill="white" className="ml-2" />
                  <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20 pointer-events-none" />
               </motion.button>
            </div>

            {/* Controls Bar Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col gap-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
               <div className="flex items-center gap-4">
                  <div className="flex-1 h-1 bg-white/20 rounded-full relative overflow-hidden">
                     <div className="absolute inset-y-0 left-0 w-[42%] bg-indigo-500" />
                  </div>
                  <span className="text-xs font-bold text-white/60">12:05 / 32:15</span>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                     <button className="text-white hover:text-indigo-400"><Play size={24} fill="currentColor" /></button>
                     <div className="flex items-center gap-3 group/vol">
                        <Volume2 size={24} />
                        <div className="w-0 group-hover/vol:w-20 h-1 bg-white/20 rounded-full transition-all overflow-hidden relative">
                           <div className="absolute inset-y-0 left-0 w-full bg-white" />
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <button className="text-white hover:text-indigo-400" onClick={() => setShowNotes(!showNotes)}><MessageSquare size={20} /></button>
                     <button className="text-white hover:text-indigo-400"><Settings size={20} /></button>
                     <button className="text-white hover:text-indigo-400"><Maximize2 size={20} /></button>
                  </div>
               </div>
            </div>
         </div>

         {/* Content Meta & Info */}
         <div className="p-8 lg:p-12 bg-slate-950 border-t border-slate-900 min-h-[300px] overflow-y-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
               <div>
                  <h2 className="text-2xl font-black mb-2 flex items-center gap-3">
                    {lessons[activeLesson].title}
                  </h2>
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                       <HelpCircle size={16} /> 24 Questions Asked
                    </span>
                    <span className="flex items-center gap-2 text-indigo-400 text-sm font-bold bg-indigo-400/10 px-3 py-1 rounded-lg">
                       <Star size={16} fill="currentColor" /> Pro Content
                    </span>
                  </div>
               </div>
               <div className="flex gap-4">
                  <button className="p-4 bg-slate-900 hover:bg-slate-800 rounded-2xl border border-slate-800 transition-all">
                     <FileText size={20} className="text-slate-400" />
                  </button>
                  <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black text-sm uppercase tracking-widest text-white shadow-glow flex items-center gap-3 transition-all">
                     Join Discussion <ArrowRight size={18} />
                  </button>
               </div>
            </div>

            <div className="max-w-4xl">
               <h3 className="text-lg font-bold mb-4 text-indigo-100">Lesson Description</h3>
               <p className="text-slate-400 leading-loose text-lg">
                  In this lesson, we break down the fundamental approach to scoring an A1 in {course.category}. 
                  Most students focus on brute-force memorization, but the WASSCE board prioritizes conceptual clarity and 
                  application-based reasoning. We will look at past questions from 2018 to 2024 to identify recurring patterns.
               </p>
            </div>
         </div>

         {/* Interactive Notes Overlay (Slide from right) */}
         <AnimatePresence>
            {showNotes && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="absolute inset-y-0 right-0 w-full md:w-96 bg-slate-900 border-l border-slate-800 z-50 flex flex-col shadow-2xl"
              >
                 <div className="p-8 border-b border-slate-800 flex justify-between items-center">
                    <h3 className="text-xl font-black italic">Live Notes</h3>
                    <button onClick={() => setShowNotes(false)} className="text-slate-500 hover:text-white transition-colors">Close</button>
                 </div>
                 <div className="flex-1 p-8 overflow-y-auto space-y-6">
                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
                       <p className="text-[10px] text-indigo-400 font-bold uppercase mb-2">Timestamp: 05:42</p>
                       <p className="text-sm text-slate-300">Remember to always define the core terms before starting the derivation.</p>
                    </div>
                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
                       <p className="text-[10px] text-indigo-400 font-bold uppercase mb-2">Timestamp: 12:10</p>
                       <p className="text-sm text-slate-300">The 2022 exam used a variation of this formula. Focus on the units!</p>
                    </div>
                 </div>
                 <div className="p-6 border-t border-slate-800">
                    <input 
                      type="text" 
                      placeholder="Type a new note..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm outline-none focus:border-indigo-500 transition-all font-medium"
                    />
                 </div>
              </motion.div>
            )}
         </AnimatePresence>
      </section>
    </main>
  );
}
