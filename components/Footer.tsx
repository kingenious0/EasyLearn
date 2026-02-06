'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                 <span className="text-xl font-black italic text-white leading-none">E</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-foreground">
                Easy<span className="text-gradient">Learn</span>
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Empowering the next generation of West African leaders with the world&apos;s most powerful learning platform.
            </p>
            <div className="flex items-center gap-4">
               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300">
                    <Icon size={18} />
                 </Link>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'Courses', 'Mentorship', 'Pricing'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="text-slate-500 hover:text-indigo-400 font-bold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Support</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-500 hover:text-indigo-400 font-bold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Contact Us</h4>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 text-slate-500 group">
                    <Mail size={18} className="text-indigo-500" />
                    <span className="text-sm font-bold group-hover:text-foreground transition-colors">support@easylearn.com.gh</span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-500 group">
                    <MapPin size={18} className="text-indigo-500" />
                    <span className="text-sm font-bold group-hover:text-foreground transition-colors">Labone, Accra, Ghana</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">
             &copy; {new Date().getFullYear()} EasyLearn Technologies. Made with <span className="text-red-500">❤️</span> for Ghana.
           </p>
           <div className="flex items-center gap-6">
              <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-foreground">Status</Link>
              <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-foreground">Security</Link>
              <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-foreground flex items-center gap-2">
                 <Github size={12} /> Github
              </Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
