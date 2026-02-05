'use client';

import styles from './dashboard.module.css';
import { PlayCircle, Clock, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div>
      <div className={styles.welcomeSection}>
        <motion.h1 
          className={styles.welcomeTitle}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Welcome back, Kwame!
        </motion.h1>
        <p className="text-muted">You're on a 3-day streak. Keep it up!</p>
      </div>

      <div className={styles.grid}>
        {/* Resume Learning Widget */}
        <motion.div 
          className={`${styles.card} ${styles.resumeCard}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className={styles.cardHeader}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>In Progress</span>
            <div style={{ padding: '4px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '0.75rem' }}>Core Math</div>
          </div>
          <h3 className={styles.cardTitle}>Algebraic Expressions: Advanced</h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Module 3 • Lesson 2</p>
          
          <div style={{ marginTop: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <button className="btn-primary" style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <PlayCircle size={18} /> Resume Lesson
          </button>
        </motion.div>

        {/* Stats Widget */}
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Your Stats</h3>
            <TrendingUp size={20} color="var(--color-secondary)" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div className={styles.statRow}>
              <span className="text-muted">Total Hours</span>
              <span style={{ fontWeight: 600 }}>24.5h</span>
            </div>
            <div className={styles.statRow}>
              <span className="text-muted">Quizzes Passed</span>
              <span style={{ fontWeight: 600 }}>12</span>
            </div>
            <div className={styles.statRow}>
              <span className="text-muted">Average Score</span>
              <span style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>88%</span>
            </div>
          </div>
        </motion.div>

        {/* Schedule Widget */}
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
           <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Up Next</h3>
            <Clock size={20} color="var(--color-primary)" />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
            <div style={{ background: 'var(--color-bg-dark)', padding: '0.5rem', borderRadius: '8px', textAlign: 'center', minWidth: '50px' }}>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>14</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>FEB</div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Live Physics Q&A</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>with Mr. Opoku • 4:00 PM</p>
              <button style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--color-primary)', background: 'transparent', border: '1px solid var(--color-primary)', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>
                Set Reminder
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
