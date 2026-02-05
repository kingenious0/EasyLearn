'use client';

import Link from 'next/link';
import styles from './dashboard.module.css';
import { LayoutDashboard, BookOpen, Calendar, MessageSquare, Settings, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Courses', href: '/dashboard/courses', icon: BookOpen },
    { name: 'Schedule', href: '/dashboard/schedule', icon: Calendar },
    { name: 'Mentorship', href: '/dashboard/mentorship', icon: MessageSquare },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className={styles.dashboardLayout}>
      <aside className={styles.sidebar}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`${styles.sidebarLink} ${isActive ? styles.activeLink : ''}`}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <button className={styles.sidebarLink} style={{ background: 'transparent', border: 'none', cursor: 'pointer', marginTop: 'auto' }}>
          <LogOut size={20} />
          Sign Out
        </button>
      </aside>
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
