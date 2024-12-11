import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">
          <Link href="/">Quiz Game</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/quiz" className="hover:text-blue-400">Quiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
