import { useRouter } from 'next/navigation';

export default function ResultsPage({ score, totalQuestions }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-6">Quiz Results</h2>
      <p className="text-lg mb-4">Your Score: {score} / {totalQuestions}</p>
      <div className="space-x-4">
        <button
          onClick={() => router.push('/quiz')}
          className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
        >
          Retry Quiz
        </button>
        <button
          onClick={() => router.push('/')}
          className="bg-gray-500 hover:bg-gray-700 text-white py-3 px-6 rounded-lg"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}