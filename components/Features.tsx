'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Target, Zap, Shield, Rocket } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'AI Intelligence',
      desc: 'Predictive algorithms that map your strengths and weaknesses in real-time.',
      icon: Brain,
      color: 'text-indigo-600'
    },
    {
      title: 'Cinema Grade',
      desc: 'Breathtaking 4K video lessons designed to make complex topics simple.',
      icon: Sparkles,
      color: 'text-purple-600'
    },
    {
      title: 'Global Analytics',
      desc: 'See where you rank against thousands of students across West Africa.',
      icon: Target,
      color: 'text-rose-600'
    },
    {
      title: 'Expert Mentors',
      desc: 'Direct access to the top 1% of educators for personalized guidance.',
      icon: Zap,
      color: 'text-amber-600'
    }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="container-premium">
        <div className="max-w-3xl mb-24">
           <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-6"
           >
              The Gold Standard
           </motion.p>
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.9]"
           >
              Engineered <br /> for <span className="text-slate-400">Success.</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
           {features.map((f, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-10 bg-white rounded-[3rem] border border-slate-100 hover:shadow-premium transition-all duration-500 group"
             >
                <div className={`mb-10 transition-transform group-hover:scale-110 duration-500 ${f.color}`}>
                   <f.icon size={40} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{f.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                   {f.desc}
                </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
