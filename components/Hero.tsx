'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Star, Zap, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center bg-white">
      {/* Subtle Background Textures */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.03)_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest mb-10 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Trusted by 15,000+ Ghanaian Students
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-[8rem] font-black tracking-tight leading-[0.85] mb-10 text-slate-900"
            >
              Learn <br />
              <span className="text-indigo-600">Different.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-slate-500 leading-relaxed max-w-lg mb-12 font-medium"
            >
              The most powerful learning system for SHS. Master any subject with cinema-grade lessons and elite mentorship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Link href="/signup" className="btn-premium group">
                Begin Your Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-4 text-slate-900 font-bold group">
                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-all">
                  <Play size={18} fill="currentColor" />
                </div>
                See it in action
              </button>
            </motion.div>

            {/* Micro-Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-20 flex items-center justify-center lg:justify-start gap-10 opacity-60 grayscale hover:grayscale-0 transition-all"
            >
              <div className="text-xl font-black italic tracking-tighter">WASSCE MASTERED</div>
              <div className="h-6 w-px bg-slate-200" />
              <div className="text-xl font-black italic tracking-tighter">GES COMPLIANT</div>
            </motion.div>
          </div>

          {/* Right: Premium Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100 border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Premium Learning" 
                fill 
                className="object-cover"
              />
              {/* Floating Widgets */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 left-12 p-6 glass-card rounded-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900">AI Adaptive</h4>
                    <p className="text-xs text-slate-500 font-bold">Personalizing path...</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 right-12 p-8 glass-card rounded-[3rem] w-[300px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">Course Progress</span>
                  <span className="text-xs font-black">88%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-slate-900 w-[88%]" />
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-20 bg-indigo-100/50 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
