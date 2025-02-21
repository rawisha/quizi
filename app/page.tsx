import QuizGame from '@/components/quiz-game';
import { getCategories } from '@/lib/sanity';

export default async function Home () {
  const categories = await getCategories()
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 flex items-center justify-center p-4">
      <QuizGame initialCategories={categories} />
    </div>
  );
}