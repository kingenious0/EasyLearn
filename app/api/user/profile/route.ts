import { NextResponse } from 'next/server';

export async function GET() {
  const userData = {
    name: 'Kwame Evans',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky',
    streak: 5,
    totalPoints: 2450,
    rank: 'Gold Learner',
    stats: {
      coursesCompleted: 3,
      hoursStudied: 42.5,
      quizAverage: 88,
    },
    recentActivity: [
      { id: 1, action: 'Completed Lesson', detail: 'Algebraic Expressions', date: '2 hours ago' },
      { id: 2, action: 'Quiz Passed', detail: 'Cell Biology (SHS 2)', date: 'Yesterday' },
      { id: 3, action: 'New Course Started', detail: 'English Language', date: '3 days ago' },
    ]
  };

  return NextResponse.json(userData);
}
