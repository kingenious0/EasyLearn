'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Video, Calendar, Users, Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function MentorshipPage() {
  const mentors = [
    {
      name: 'Dr. Mensah',
      role: 'Core Subject Specialist',
      subjects: ['Mathematics', 'Further Math'],
      rating: 4.9,
      students: 450,
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop',
      available: true
    },
    {
      name: 'Prof. Appiah',
      role: 'Science Lead',
      subjects: ['Biology', 'Integrated Science'],
      rating: 4.8,
      students: 320,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      available: true
    },
    {
      name: 'Mrs. Boateng',
      role: 'English Excellence Coach',
      subjects: ['English Language', 'Lit. in English'],
      rating: 5.0,
      students: 890,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
      available: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] pt-32 pb-20 px-6 lg:px-12 text-slate-100 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              One-on-One <span className="text-gradient">Guidance</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Connect with Ghana&apos;s best educators for personalized mentorship, 
              doubt clearing, and exam strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black text-sm uppercase tracking-widest shadow-glow transition-all">
                  Book a Session
               </button>
               <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
                  Watch Sample Live
               </button>
            </div>
          </motion.div>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {[
             { icon: MessageSquare, title: '24/7 Chat', desc: 'Instant clarity for your toughest homework problems.' },
             { icon: Video, title: 'Live 1:1', desc: 'High-definition video sessions with screensharing tools.' },
             { icon: Calendar, title: 'Study Plans', desc: 'Customized schedules based on your target university.' }
           ].map((item, i) => (
             <div key={i} className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-800 hover:border-indigo-500/30 transition-all group">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 font-bold text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* Mentors List */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-extrabold px-4 md:px-0">Meet the <span className="text-indigo-400">Masters</span></h2>
            <button className="hidden md:flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-all">
               View all mentors <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, idx) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/30 border border-slate-800 rounded-[3rem] p-8 hover:bg-slate-900/50 transition-all hover:scale-[1.02] group"
              >
                <div className="relative w-24 h-24 mb-6">
                   <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                   <div className="absolute inset-0 bg-slate-800 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform" />
                   <Image 
                     src={mentor.image} 
                     alt={mentor.name} 
                     fill 
                     className="object-cover rounded-2xl relative z-10"
                   />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-indigo-400 text-sm font-semibold">{mentor.role}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {mentor.subjects.map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-tighter rounded-full border border-slate-700">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                   <div className="flex items-center gap-2">
                     <Star fill="currentColor" size={16} className="text-amber-400" />
                     <span className="font-bold text-sm">{mentor.rating}</span>
                   </div>
                   {mentor.available ? (
                      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase text-green-400">
                         <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                         Available Now
                      </span>
                   ) : (
                      <span className="text-[10px] font-black uppercase text-slate-600">Fully Booked Today</span>
                   )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-tr from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap size={120} />
           </div>
           
           <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
             Don&apos;t get stuck alone.<br />Get a Master.
           </h2>
           <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-12">
              Our mentors have helped over 5,000 Ghanaian students improve their WASSCE grades by at least 40%.
           </p>
           
           <div className="flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-12">
              <ShieldCheck size={18} /> Verified Top-Grade Tutors
           </div>

           <button className="px-12 py-5 bg-white text-indigo-900 rounded-3xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-glow">
              Claim Your Free 15-Min Consultation
           </button>
        </section>
      </div>
    </main>
  );
}
