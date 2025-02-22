import { QuizState, QuizAction, Category } from './types';
import { shuffleArray } from './utils';

export const initialState: QuizState = {
  gameState: 'start',
  difficulty: 'easy',
  selectedCategory: null,
  currentQuestion: 0,
  selectedAnswer: null,
  lives: 3,
  timeLeft: 30,
  score: 0,
  correctAnswers: 0,
};

function randomizeCategory(category: Category): Category {
  return {
    ...category,
    questions: shuffleArray(category.questions).map(question => ({
      ...question,
      options: shuffleArray(question.options)
    }))
  };
}

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        selectedCategory: randomizeCategory(action.payload),
        gameState: 'difficulty',
      };

    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.payload,
        gameState: 'playing',
      };

    case 'SELECT_ANSWER': {
      if (!state.selectedCategory) return state;

      const isCorrect = action.payload === state.selectedCategory.questions[state.currentQuestion].correctAnswer;
      const timeBonus = state.difficulty === 'hard' ? Math.floor(state.timeLeft * 3.33) : 0;

      return {
        ...state,
        selectedAnswer: action.payload,
        score: isCorrect ? state.score + 100 + timeBonus : state.score,
        correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
        lives: isCorrect ? state.lives : Math.max(0, state.lives - 1),
      };
    }

    case 'TIME_UP':
      return {
        ...state,
        lives: Math.max(0, state.lives - 1),
        selectedAnswer: 'TIME_UP',
      };

    case 'CONTINUE': {
      if (!state.selectedCategory) return state;

      if (state.lives === 0) {
        return {
          ...state,
          gameState: 'finished',
        };
      }

      if (state.currentQuestion < state.selectedCategory.questions.length - 1) {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          selectedAnswer: null,
          timeLeft: 30,
        };
      }

      return {
        ...state,
        gameState: 'finished',
      };
    }

    case 'RESET':
      return initialState;

    case 'TICK':
      return {
        ...state,
        timeLeft: Math.max(0, state.timeLeft - 1),
      };

    default:
      return state;
  }
}