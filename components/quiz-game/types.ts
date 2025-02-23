export interface Question {
    _id: string;
    text: string;
    options: string[];
    correctAnswer: string;
    imageUrl?: string;
  }
  
  export interface Category {
    _id: string;
    name: string;
    description: string;
    icon: string;
    questions: Question[];
  }
  
  export type GameState = 'start' | 'difficulty' | 'playing' | 'finished';
  export type Difficulty = 'easy' | 'hard';
  
  export interface QuizState {
    gameState: GameState;
    difficulty: Difficulty;
    selectedCategory: Category | null;
    currentQuestion: number;
    selectedAnswer: string | null;
    lives: number;
    timeLeft: number;
    score: number;
    correctAnswers: number;
  }
  
  export type QuizAction =
    | { type: 'START_GAME'; payload: Category }
    | { type: 'SET_DIFFICULTY'; payload: Difficulty }
    | { type: 'SELECT_ANSWER'; payload: string }
    | { type: 'TIME_UP' }
    | { type: 'CONTINUE' }
    | { type: 'RESET' }
    | { type: 'TICK' };