'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, Chrome, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo/Brand */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
             <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-glow mx-auto">
                <span className="text-3xl font-black italic">E</span>
             </div>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Log in to resume your learning journey.</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
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
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Password</label>
                <Link href="/forgot-password" strokeWidth={1} className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-tighter">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-indigo-500 rounded-2xl py-4 pl-12 pr-12 text-slate-200 outline-none transition-all placeholder:text-slate-700"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Link href="/dashboard" className="flex items-center justify-center gap-3 w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-glow hover:scale-[1.02]">
              Sign In <ArrowRight size={18} />
            </Link>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#020617] lg:bg-transparent px-4 text-slate-600 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button className="flex items-center justify-center gap-2 py-4 bg-slate-800/50 hover:bg-slate-800 rounded-2xl transition-all border border-slate-700">
                <Chrome size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Google</span>
             </button>
             <button className="flex items-center justify-center gap-2 py-4 bg-slate-800/50 hover:bg-slate-800 rounded-2xl transition-all border border-slate-700">
                <Github size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Github</span>
             </button>
          </div>
        </div>

        <p className="text-center mt-10 text-slate-500 font-medium">
          Don&apos;t have an account? <Link href="/signup" className="text-indigo-400 font-bold hover:text-indigo-300 underline underline-offset-4">Create one for free</Link>
        </p>
      </motion.div>
    </main>
  );
}
