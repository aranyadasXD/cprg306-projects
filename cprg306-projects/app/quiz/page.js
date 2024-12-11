"use client";

import { useState } from "react";
import questionsData from "../data/questions.json";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function QuizPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const categories = [...new Set(questionsData.map((q) => q.category))]; 

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    const filteredQuestions = questionsData.filter((q) => q.category === category);
    const shuffled = shuffleArray(filteredQuestions).slice(0, 10);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const question = shuffledQuestions[currentQuestionIndex];

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === question.answer;

    if (isCorrect) setScore((prev) => prev + 1);

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    const filteredQuestions = questionsData.filter((q) => q.category === selectedCategory);
    const shuffled = shuffleArray(filteredQuestions).slice(0, 10);
    setShuffledQuestions(shuffled);
  };

  const progress = Math.round(((currentQuestionIndex + 1) / shuffledQuestions.length) * 100);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      {!selectedCategory ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Select a Category</h2>
          <div className="flex justify-center space-x-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelection(category)}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      ) : !showResults ? (
        <div className="w-full max-w-md">
          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Progress Text */}
          <p className="text-sm text-gray-400 mb-4">
            Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
          </p>

          <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
          <ul className="space-y-4">
            {question.options.map((option) => (
              <li
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Results</h2>
          <p className="text-lg mb-4">
            Your Score: {score} / {shuffledQuestions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
          >
            Retry Quiz
          </button>
          <button
            onClick={() => setSelectedCategory("")}
            className="mt-4 ml-4 bg-gray-500 hover:bg-gray-700 text-white py-3 px-6 rounded-lg"
          >
            Select Another Category
          </button>
        </div>
      )}
    </div>
  );
}
