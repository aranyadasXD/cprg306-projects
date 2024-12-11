"use client";

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to the Quiz Game</h1>
      <p className="text-lg mb-6 text-gray-400">Test your knowledge in this fun and interactive quiz game!</p>
      <button
        onClick={() => router.push('/quiz')}
        className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-xl"
      >
        Start Quiz
      </button>
    </div>
  );
}
