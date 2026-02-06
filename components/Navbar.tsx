'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, LogOut, LayoutDashboard, Settings, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Mentorship', href: '/mentorship' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
      scrolled 
      ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4' 
      : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
             <span className="text-xl font-black italic text-white leading-none">E</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-foreground">
            Easy<span className="text-gradient">Learn</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold tracking-wide transition-colors relative group ${
                pathname === link.href ? 'text-indigo-400' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Auth / Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <ThemeSwitcher />
          
          <div className="h-4 w-px bg-white/10" />

          <Link href="/login" className="text-sm font-bold text-foreground/60 hover:text-foreground transition-colors">
            Sign In
          </Link>
          
          <Link 
            href="/signup" 
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-black uppercase tracking-widest rounded-xl shadow-glow transition-all hover:scale-[1.05]"
          >
            Join Free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
           <ThemeSwitcher />
           <button 
             onClick={() => setIsOpen(!isOpen)}
             className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-white/5 rounded-xl transition-colors"
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full inset-x-0 bg-background/95 backdrop-blur-2xl border-b border-white/5 p-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <Link href="/login" onClick={() => setIsOpen(false)} className="text-xl font-bold text-foreground/60">
                 Sign In
              </Link>
              <Link 
                href="/signup" 
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-indigo-600 text-white text-center font-black uppercase tracking-[0.2em] rounded-2xl shadow-glow"
              >
                 Join Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
