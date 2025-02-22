import { RotateCcw, Trophy } from "lucide-react";
import { QuizState } from "./types";

interface FinishScreenProps {
  state: QuizState;
  onReset: () => void;
}

export function FinishScreen({ state, onReset }: FinishScreenProps) {
  const totalQuestions = state.selectedCategory?.questions.length || 0;

  return (
    <div className="w-full max-w-md bg-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8 text-center">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Game Over!</h2>
        <div className="space-y-2 mb-8">
          <p className="text-xl text-gray-300">Slutresultat: {state.score}</p>
          <p className="text-gray-400">
            Rätt svar: {state.correctAnswers} / {totalQuestions}
          </p>
          <p className="text-gray-400">Hjärtan kvar: {state.lives}</p>
          <p className="text-gray-400">
            Läge: {state.difficulty === "easy" ? "Enkelt" : "Svår"}
          </p>
        </div>

        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 w-full p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          <RotateCcw size={20} />
          Spela Igen
        </button>
      </div>
    </div>
  );
}
