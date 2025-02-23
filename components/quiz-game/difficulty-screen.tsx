import { Zap } from "lucide-react";
import { Difficulty } from "./types";

interface DifficultyScreenProps {
  onSelectDifficulty: (difficulty: Difficulty) => void;
  onReset: () => void;
}

export function DifficultyScreen({
  onSelectDifficulty,
  onReset,
}: DifficultyScreenProps) {
  return (
    <div className="w-full md:h-auto h-screen flex justify-center items-center md:max-w-md bg-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
        Välj Svårighetsgrad
        </h2>
        <p className="text-gray-300 text-center mb-8">Välj din utmaningsnivå</p>

        <div className="space-y-4">
          <button
            onClick={() => onSelectDifficulty("easy")}
            className="w-full p-6 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-xl transition-all duration-300 border-2 border-emerald-500/50 group"
          >
            <h3 className="text-xl font-bold text-white mb-2">Enkelt Läge</h3>
            <p className="text-gray-300 text-sm">Ta dig tid, ingen press!</p>
          </button>

          <button
            onClick={() => onSelectDifficulty("hard")}
            className="w-full p-6 bg-red-500/20 hover:bg-red-500/30 rounded-xl transition-all duration-300 border-2 border-red-500/50 group"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-white">Svår Läge</h3>
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-gray-300 text-sm">
              30 sekunder per fråga, bonuspoäng för skicklighet!
            </p>
          </button>
        </div>

        <button
          onClick={onReset}
          className="mt-8 w-full p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors"
        >
          Tillbaka till kategorier
        </button>
      </div>
    </div>
  );
}
