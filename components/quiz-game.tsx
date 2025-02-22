"use client";

import { useReducer, useEffect } from 'react';
import { Category } from './quiz-game/types';
import { quizReducer, initialState } from '@/components/quiz-game/quiz-reducer';
import { StartScreen } from './quiz-game/start-screen';
import { DifficultyScreen } from './quiz-game/difficulty-screen';
import { GameScreen } from './quiz-game/game-screen';
import { FinishScreen } from './quiz-game/finish-screen';

interface QuizGameProps {
  initialCategories: Category[];
}

export default function QuizGame({ initialCategories }: QuizGameProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (state.gameState === 'playing' && state.difficulty === 'hard' && !state.selectedAnswer) {
      timer = setInterval(() => {
        if (state.timeLeft <= 1) {
          dispatch({ type: 'TIME_UP' });
        } else {
          dispatch({ type: 'TICK' });
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [state.gameState, state.difficulty, state.currentQuestion, state.selectedAnswer, state.timeLeft]);

  switch (state.gameState) {
    case 'start':
      return (
        <StartScreen
          categories={initialCategories}
          onSelectCategory={(category) => dispatch({ type: 'START_GAME', payload: category })}
        />
      );

    case 'difficulty':
      return (
        <DifficultyScreen
          onSelectDifficulty={(difficulty) => dispatch({ type: 'SET_DIFFICULTY', payload: difficulty })}
          onReset={() => dispatch({ type: 'RESET' })}
        />
      );

    case 'playing':
      return (
        <GameScreen
          state={state}
          onSelectAnswer={(answer) => dispatch({ type: 'SELECT_ANSWER', payload: answer })}
          onReset={() => dispatch({ type: 'RESET' })}
          onContinue={() => dispatch({ type: 'CONTINUE' })}
        />
      );

    case 'finished':
      return (
        <FinishScreen
          state={state}
          onReset={() => dispatch({ type: 'RESET' })}
        />
      );

    default:
      return null;
  }
}