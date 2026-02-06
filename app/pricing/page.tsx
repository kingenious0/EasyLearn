'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Free Starter',
      price: '0',
      description: 'Perfect for exploring our platform and starting your prep.',
      features: [
        'Access to 2 free trial courses',
        'Weekly live group Q&A',
        'Basic community access',
        'Standard dashboard',
        'Limited quiz attempts'
      ],
      buttonText: 'Get Started',
      popular: false,
      color: 'slate'
    },
    {
      name: 'Smart Pro',
      price: isAnnual ? '149' : '19',
      description: 'The complete package for dedicated WASSCE candidates.',
      features: [
        'Unlimited access to ALL courses',
        '24/7 dedicated mentor support',
        'Personalised study plan',
        'A1 prediction analytics',
        'Printable study materials',
        'Priority live session access'
      ],
      buttonText: 'Upgrade to Pro',
      popular: true,
      color: 'indigo'
    },
    {
      name: 'Elite Mastery',
      price: isAnnual ? '399' : '45',
      description: 'One-on-one coaching for students aiming for top medical/tech schools.',
      features: [
        'Everything in Smart Pro',
        '2 monthly 1:1 private sessions',
        'University admission guidance',
        'Scholarship prep workshop',
        'Parents monitoring app',
        'Lifetime access to updates'
      ],
      buttonText: 'Join Elite',
      popular: false,
      color: 'purple'
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] pt-32 pb-20 px-6 lg:px-12 text-slate-100 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <section className="text-center mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Invest in your <span className="text-gradient">A1 Success</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Simple, transparent pricing for students who demand the best results.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-bold ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 bg-slate-800 rounded-full p-1 transition-all relative"
              >
                 <motion.div 
                   className="w-6 h-6 bg-indigo-500 rounded-full shadow-glow"
                   animate={{ x: isAnnual ? 32 : 0 }}
                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
                 />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${isAnnual ? 'text-white' : 'text-slate-500'}`}>Annual</span>
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] font-black uppercase rounded-full border border-green-500/20">Save 35%</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-10 rounded-[2.5rem] border ${
                plan.popular 
                ? 'bg-slate-900/60 border-indigo-500/50 shadow-glow scale-105 z-20' 
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">GH₵{plan.price}</span>
                <span className="text-slate-500 font-semibold">{isAnnual ? '/year' : '/month'}</span>
              </div>

              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      plan.popular ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500'
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                plan.popular 
                ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-glow' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <section className="mt-32 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
                <ShieldCheck className="text-indigo-400" size={24} />
                <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Secure Payments via Paystack & Mobile Money</span>
            </div>
            <p className="text-slate-400 italic">
               Join 15,000+ Ghanaian students already crushing their WASSCE. No hidden fees. Cancel anytime.
            </p>
        </section>
      </div>
    </main>
  );
}
