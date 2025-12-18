import { useState } from 'react';
import { questions } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { ScoreScreen } from './components/ScoreScreen';
import { WelcomeScreen } from './components/WelcomeScreen';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setGameStarted(false);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-900 font-sans">
      <div className="bg-slate-800 text-white w-full max-w-lg rounded-xl shadow-2xl p-8 m-4 border border-slate-700">

        {!gameStarted ? (
          <WelcomeScreen onStart={() => setGameStarted(true)} />
        ) : showScore ? (
          <ScoreScreen
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        ) : (
          <QuestionCard
            key={currentQuestion}
            question={questions[currentQuestion]}
            currentQuestionIndex={currentQuestion}
            totalQuestions={questions.length}
            onAnswer={handleAnswerOptionClick}
          />
        )}

      </div>
    </div>
  );
}
