import { Heart, Timer, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { QuizState } from './types';

interface GameScreenProps {
  state: QuizState;
  onSelectAnswer: (answer: string) => void;
  onReset: () => void;
  onContinue: () => void;
}

export function GameScreen({ state, onSelectAnswer, onReset, onContinue }: GameScreenProps) {
  const { selectedCategory } = state;
  
  // Early return if no category is selected
  if (!selectedCategory) {
    return (
      <div className="w-full max-w-md bg-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <p className="text-white">Laddar...</p>
        </div>
      </div>
    );
  }

  // Get current question safely
  const currentQuestion = selectedCategory.questions[state.currentQuestion];
  
  return (
    <div className="w-full max-w-md bg-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          {state.difficulty === 'hard' && (
            <div className="flex items-center gap-2 text-gray-300">
              <Timer size={20} />
              <span className={cn(
                state.timeLeft <= 10 && "text-red-500 animate-pulse font-bold"
              )}>{state.timeLeft}s</span>
            </div>
          )}
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-white">Poäng: {state.score}</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  size={20}
                  className={cn(
                    "transition-all duration-500 transform",
                    i < state.lives ? "text-pink-500 scale-110" : "text-gray-600"
                  )}
                  fill={i < state.lives ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-gray-400 mb-2">
          Fråga {state.currentQuestion + 1} av {selectedCategory.questions.length}
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">
          {currentQuestion.text}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => onSelectAnswer(option)}
              disabled={state.selectedAnswer !== null}
              className={cn(
                "w-full p-4 rounded-lg text-center transition-all duration-300",
                "hover:bg-indigo-900/50",
                state.selectedAnswer === option
                  ? option === currentQuestion.correctAnswer
                    ? "bg-green-500/20 border-2 border-green-500"
                    : "bg-red-500/20 border-2 border-red-500"
                  : state.selectedAnswer === 'TIME_UP'
                  ? option === currentQuestion.correctAnswer
                    ? "bg-yellow-500/20 border-2 border-yellow-500"
                    : "bg-white/10 border-2 border-transparent"
                  : "bg-white/10 border-2 border-transparent",
                "text-white font-medium",
                state.selectedAnswer !== null && "cursor-default"
              )}
            >
              {option}
            </button>
          ))}
        </div>

        {(state.selectedAnswer || state.selectedAnswer === 'TIME_UP') && (
          <div className="flex gap-4 mt-6">
            <button
              onClick={onReset}
              className="flex items-center justify-center gap-2 w-1/2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              <RotateCcw size={20} />
              Starta om
            </button>
            <button
              onClick={onContinue}
              className="w-1/2 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            >
              Fortsätt
            </button>
          </div>
        )}
      </div>
    </div>
  );
}