import { NextResponse } from 'next/server';

export async function GET() {
  const courses = [
    {
      id: '1',
      title: 'Core Mathematics Masterclass',
      instructor: 'Dr. Mensah',
      duration: '12h 30m',
      lessons: 24,
      level: 'SHS 1-3',
      rating: 4.8,
      students: 1250,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
      category: 'Mathematics',
      progress: 75,
    },
    {
      id: '2',
      title: 'Integrated Science Detailed',
      instructor: 'Prof. Appiah',
      duration: '15h 45m',
      lessons: 32,
      level: 'SHS 2',
      rating: 4.9,
      students: 850,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
      category: 'Science',
      progress: 30,
    },
    {
      id: '3',
      title: 'English Language: Oral & Essay',
      instructor: 'Mrs. Boateng',
      duration: '10h 20m',
      lessons: 18,
      level: 'SHS 1-3',
      rating: 4.7,
      students: 2100,
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop',
      category: 'English',
      progress: 0,
    },
    {
      id: '4',
      title: 'Elective Physics: Mechanics',
      instructor: 'Mr. Owusu',
      duration: '20h 15m',
      lessons: 40,
      level: 'SHS 3',
      rating: 4.9,
      students: 450,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2070&auto=format&fit=crop',
      category: 'Science',
      progress: 10,
    }
  ];

  return NextResponse.json(courses);
}
