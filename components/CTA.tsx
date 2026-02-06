'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-center';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container-premium">
        <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.3)_0%,transparent_50%)]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-10">
               Ready to <br /> outperform?
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-12">
               Begin your transformation today. Join the elite circle of Ghanaian students.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link href="/signup" className="px-12 py-6 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">
                  Get Started for Free
               </Link>
               <Link href="/pricing" className="px-12 py-6 border-2 border-slate-800 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">
                  View Expert Plans
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
