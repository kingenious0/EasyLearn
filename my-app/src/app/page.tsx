'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, Play, BookOpen, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "Core Mathematics Masterclass",
      category: "WASSCE Prep",
      students: "1.2k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Integrated Science Detailed",
      category: "SHS 2",
      students: "850",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "English Language: Oral & Essay",
      category: "Remedial",
      students: "2.1k",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop"
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient-primary" style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              The Future of Learning
            </span>
          </motion.div>
          
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Master <span className="text-gradient">WASSCE</span> with <br /> 
            Confidence & Style.
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join thousands of Ghanaian students achieving A1s with our premium video lessons, 
            interactive quizzes, and 24/7 mentorship.
          </motion.p>
          
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Start Learning Free <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Play size={20} fill="currentColor" /> Watch Democracy
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className={styles.section} id="courses">
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Featured Classes</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Curated content for top performance.</p>
          </div>
          <Link href="/courses" className="text-gradient-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            View all courses <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.courseGrid}>
          {courses.map((course, index) => (
            <motion.div 
              key={course.id}
              className={styles.courseCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.courseImage}>
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.courseContent}>
                <span className={styles.courseCategory}>{course.category}</span>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <div className={styles.courseStats}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users size={16} /> {course.students} Students
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={16} fill="currentColor" color="var(--color-secondary)" /> {course.rating}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>15k+</span>
          <span className={styles.statLabel}>Students Enrolled</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>98%</span>
          <span className={styles.statLabel}>Pass Rate</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Video Lessons</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>24/7</span>
          <span className={styles.statLabel}>Expert Support</span>
        </div>
      </section>
    </main>
  );
}
