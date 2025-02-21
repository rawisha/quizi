"use client";

import { useState, useEffect } from "react";
import { Heart, Timer, RotateCcw, Trophy, Zap } from "lucide-react";
import { cn } from "@/lib/utils";


interface Question {
    _id: string;
    text: string;
    options: string[];
    correctAnswer: string;
  }
  
  interface Category {
    _id: string;
    name: string;
    description: string;
    icon: string;
    questions: Question[];
  }

type GameState = "start" | "difficulty" | "playing" | "finished";
type Difficulty = "easy" | "hard";

interface QuizGameProps {
    initialCategories: Category[];
  }

export default function QuizGame({initialCategories}: QuizGameProps) {
  const [gameState, setGameState] = useState<GameState>("start");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (gameState === "playing" && difficulty === "hard" && !selectedAnswer) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState, difficulty, currentQuestion, selectedAnswer]);

  const handleTimeUp = () => {
    setLives((prev) => Math.max(0, prev - 1));
    setSelectedAnswer("TIME_UP");
  };

  const resetGame = () => {
    setGameState("start");
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setLives(3);
    setTimeLeft(30);
    setScore(0);
    setDifficulty("easy");
    setCorrectAnswers(0);
  };

  const startGame = (category: Category) => {
    setSelectedCategory(category);
    setGameState("difficulty");
  };

  const startWithDifficulty = (selectedDifficulty: Difficulty) => {
    setDifficulty(selectedDifficulty);
    setGameState("playing");
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);

    if (!selectedCategory) return;

    if (answer === selectedCategory.questions[currentQuestion].correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
      const timeBonus = difficulty === "hard" ? Math.floor(timeLeft * 3.33) : 0;
      setScore((prev) => prev + 100 + timeBonus);
    } else {
      setLives((prev) => Math.max(0, prev - 1));
    }
  };

  const handleContinue = () => {
    if (!selectedCategory) return;

    if (lives === 0) {
      setGameState("finished");
      return;
    }

    if (currentQuestion < selectedCategory.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setGameState("finished");
    }
  };

  if (gameState === "start") {
    return (
      <div className="w-full max-w-4xl bg-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Quiz<span className="text-red-600">i</span>
          </h1>
          <p className="text-gray-300 text-center mb-12">
            Välj en kategori för att börja spela
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initialCategories.map((category) => (
              <button
                key={category._id}
                onClick={() => startGame(category)}
                className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === "difficulty") {
    return (
      <div className="w-full max-w-md bg-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Välj Svårighetsgrad
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Välj din utmaningsnivå
          </p>

          <div className="space-y-4">
            <button
              onClick={() => startWithDifficulty("easy")}
              className="w-full p-6 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-xl transition-all duration-300 border-2 border-emerald-500/50 group"
            >
              <h3 className="text-xl font-bold text-white mb-2">Enkel läge</h3>
              <p className="text-gray-300 text-sm">Ta dig tid, ingen press!</p>
            </button>

            <button
              onClick={() => startWithDifficulty("hard")}
              className="w-full p-6 bg-red-500/20 hover:bg-red-500/30 rounded-xl transition-all duration-300 border-2 border-red-500/50 group"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">Svår läge</h3>
                <Zap className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-gray-300 text-sm">
              30 sekunder per fråga, bonuspoäng för snabbhet!
              </p>
            </button>
          </div>

          <button
            onClick={resetGame}
            className="mt-8 w-full p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors"
          >
            Tillbaka till kategorier
          </button>
        </div>
      </div>
    );
  }

  if (gameState === "finished") {
    const totalQuestions = selectedCategory?.questions.length || 0;
    return (
      <div className="w-full max-w-md bg-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Game Over!</h2>
          <div className="space-y-2 mb-8">
            <p className="text-xl text-gray-300">Slutresultat: {score}</p>
            <p className="text-gray-400">
            Rätt svar: {correctAnswers} / {totalQuestions}
            </p>
            <p className="text-gray-400">Hjärtan kvar: {lives}</p>
            <p className="text-gray-400">
            Läge: {difficulty === "easy" ? "Enkel" : "Svår"}
            </p>
          </div>

          <button
            onClick={resetGame}
            className="flex items-center justify-center gap-2 w-full p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            <RotateCcw size={20} />
            Spela igen
          </button>
        </div>
      </div>
    );
  }

  if (!selectedCategory) return null;

  return (
    <div className="w-full max-w-md bg-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          {difficulty === "hard" && (
            <div className="flex items-center gap-2 text-gray-300">
              <Timer size={20} />
              <span
                className={cn(
                  timeLeft <= 10 && "text-red-500 animate-pulse font-bold"
                )}
              >
                {timeLeft}s
              </span>
            </div>
          )}
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-white">Poäng: {score}</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  size={20}
                  className={cn(
                    "transition-colors duration-300",
                    i < lives ? "text-pink-500" : "text-gray-600"
                  )}
                  fill={i < lives ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>
        </div>
              
        <div className="text-gray-400 mb-2">
          Fråga {currentQuestion + 1} av{" "}
          {selectedCategory?.questions?.length}
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">
          {selectedCategory.questions[currentQuestion]?.text}
        </h2>

        <div className="space-y-4">
          {selectedCategory.questions[currentQuestion]?.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              disabled={selectedAnswer !== null}
              className={cn(
                "w-full p-4 rounded-lg text-center transition-all duration-300",
                "hover:bg-indigo-900/50",
                selectedAnswer === option
                  ? option ===
                    selectedCategory.questions[currentQuestion]?.correctAnswer
                    ? "bg-green-500/20 border-2 border-green-500"
                    : "bg-red-500/20 border-2 border-red-500"
                  : selectedAnswer === "TIME_UP"
                  ? option ===
                    selectedCategory.questions[currentQuestion]?.correctAnswer
                    ? "bg-yellow-500/20 border-2 border-yellow-500"
                    : "bg-white/10 border-2 border-transparent"
                  : "bg-white/10 border-2 border-transparent",
                "text-white font-medium",
                selectedAnswer !== null && "cursor-default"
              )}
            >
              {option}
            </button>
          ))}
        </div>

        {(selectedAnswer || selectedAnswer === "TIME_UP") && (
          <div className="flex gap-4 mt-6">
            <button
              onClick={resetGame}
              className="flex items-center justify-center gap-2 w-1/2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              <RotateCcw size={20} />
              Starta Om
            </button>
            <button
              onClick={handleContinue}
              className="w-1/2 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            >
              Nästa
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
