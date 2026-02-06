'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: 'Active Learners', value: '15,000+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Expert Mentors', value: '120+' },
    { label: 'Learning Hours', value: '1.2M+' }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-50">
      <div className="container-premium">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
           {stats.map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group"
             >
                <div className="space-y-4">
                   <h3 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {stat.value}
                   </h3>
                   <div className="h-1.5 w-8 bg-indigo-500 rounded-full group-hover:w-16 transition-all duration-500" />
                   <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                      {stat.label}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
