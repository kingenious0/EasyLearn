'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight, Github, Chrome, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-20%] w-[70%] h-[70%] bg-indigo-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg relative z-10"
      >
        {/* Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
             <div className="w-14 h-14 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-glow mx-auto group hover:scale-110 transition-transform">
                <span className="text-2xl font-black italic">E</span>
             </div>
          </Link>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Join the Future.</h1>
          <p className="text-slate-500 font-medium">Create your high-grade learning account today.</p>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Kwame Evans"
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-indigo-500 rounded-2xl py-4 pl-12 pr-4 text-slate-200 outline-none transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-indigo-500 rounded-2xl py-4 pl-12 pr-4 text-slate-200 outline-none transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-indigo-500 rounded-2xl py-4 pl-12 pr-4 text-slate-200 outline-none transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-indigo-500 rounded-2xl py-4 pl-12 pr-4 text-slate-200 outline-none transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <button className="flex items-center justify-center gap-3 w-full py-5 bg-indigo-600 hover:bg-indigo-500 rounded-[1.5rem] font-black text-sm uppercase tracking-widest transition-all shadow-glow hover:scale-[1.01]">
                Create My Account <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
              <span className="bg-slate-950/20 lg:bg-[#020617] px-4 text-slate-600">Secure Sign Up</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
             <button className="flex-1 flex items-center justify-center gap-3 py-4 bg-slate-800/50 hover:bg-slate-800 rounded-2xl transition-all border border-slate-700">
                <Chrome size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Google</span>
             </button>
             <button className="flex-1 flex items-center justify-center gap-3 py-4 bg-slate-800/50 hover:bg-slate-800 rounded-2xl transition-all border border-slate-700">
                <Github size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Github</span>
             </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-xs font-medium">
           <ShieldCheck size={16} className="text-green-500" />
           Your data is encrypted and secure with 256-bit SSL.
        </div>

        <p className="text-center mt-8 text-slate-500 font-medium">
          Already have an account? <Link href="/login" className="text-indigo-400 font-bold hover:text-indigo-300 underline underline-offset-4">Log in here</Link>
        </p>
      </motion.div>
    </main>
  );
}
