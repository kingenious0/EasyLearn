'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <div style={{ background: 'var(--color-primary)', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <GraduationCap size={20} color="white" />
        </div>
        EasyLearn
      </Link>

      <div className={styles.navLinks}>
        <Link href="/" className={`${styles.link} ${styles.active}`}>Home</Link>
        <Link href="#courses" className={styles.link}>Classes</Link>
        <Link href="/mentorship" className={styles.link}>Mentorship</Link>
        <Link href="/pricing" className={styles.link}>Pricing</Link>
      </div>

      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>Values</button>
        <Link href="/dashboard">
          <button className={styles.ctaBtn}>Student Portal</button>
        </Link>
      </div>
    </nav>
  );
}
