import { useState } from "react";
import { Heart, Timer, RotateCcw, ZoomIn, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuizState } from "./types";
import Image from "next/image";

interface GameScreenProps {
  state: QuizState;
  onSelectAnswer: (answer: string) => void;
  onReset: () => void;
  onContinue: () => void;
}

export function GameScreen({
  state,
  onSelectAnswer,
  onReset,
  onContinue,
}: GameScreenProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const { selectedCategory } = state;

  // Early return if no category is selected
  if (!selectedCategory) {
    return (
      <div className="w-full h-screen md:h-auto flex justify-center items-center md:max-w-md bg-indigo-950 md:rounded-3xl p-10 shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <p className="text-white">
            Laddar
            <span className="animate-dot1">.</span>
            <span className="animate-dot2">.</span>
            <span className="animate-dot3">.</span>
          </p>
        </div>
      </div>
    );
  }

  // Get current question safely
  const currentQuestion = selectedCategory.questions[state.currentQuestion];

  return (
    <>
      <div className="w-full md:max-w-md h-screen md:h-auto bg-indigo-950 md:rounded-3xl  shadow-2xl flex flex-col ">
        <div className="px-8 py-4 h-screen flex-1 overflow-y-auto md:h-auto">
          <div className="flex justify-between items-center mb-8">
            {state.difficulty === "hard" && (
              <div className="flex items-center gap-2 text-gray-300">
                <Timer size={20} />
                <span
                  className={cn(
                    state.timeLeft <= 10 &&
                      "text-red-500 animate-pulse font-bold"
                  )}
                >
                  {state.timeLeft}s
                </span>
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
                      "transition-colors duration-300",
                      i < state.lives ? "text-pink-500" : "text-gray-600"
                    )}
                    fill={i < state.lives ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-gray-400 mb-2">
            Fråga {state.currentQuestion + 1} av{" "}
            {selectedCategory.questions.length}
          </div>

          {currentQuestion?.imageUrl && (
            <div className="relative mb-6 group">
              <Image
                src={currentQuestion.imageUrl}
                alt="Question"
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg cursor-zoom-in"
                onClick={() => setIsImageModalOpen(true)}
              />
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="w-5 h-5 text-white" />
              </button>
            </div>
          )}

          <h2 className="text-2xl font-bold text-white mb-8">
            {currentQuestion?.text}
          </h2>

          <div className="space-y-4 overflow-y-auto">
            {currentQuestion?.options.map((option) => {
              const isSelected = state.selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showCorrectHighlight = state.selectedAnswer && isCorrect;
              const showIncorrectHighlight = isSelected && !isCorrect;

              return (
                <button
                  key={option}
                  onClick={() => onSelectAnswer(option)}
                  disabled={state.selectedAnswer !== null}
                  className={cn(
                    "w-full p-4 rounded-lg text-center transition-all duration-300",
                    "hover:bg-indigo-900/50",
                    "relative overflow-hidden",
                    {
                      "bg-green-500/20 border-2 border-green-500":
                        showCorrectHighlight,
                      "bg-red-500/20 border-2 border-red-500":
                        showIncorrectHighlight,
                      "bg-white/10 border-2 border-transparent":
                        !showCorrectHighlight && !showIncorrectHighlight,
                      "cursor-default": state.selectedAnswer !== null,
                    }
                  )}
                >
                  <span className="relative z-10 text-white font-medium">
                    {option}
                    {showCorrectHighlight && (
                      <span className="ml-2 text-green-400">
                        (Korrekt svar)
                      </span>
                    )}
                    {showIncorrectHighlight && (
                      <span className="ml-2 text-red-400">(Ditt svar)</span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {(state.selectedAnswer || state.selectedAnswer === "TIME_UP") && (
            <div className="flex gap-4  mt-2">
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
                Nästa
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && currentQuestion.imageUrl && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <Image
              src={currentQuestion.imageUrl}
              alt="Question"
              width={1500}
              height={1500}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
