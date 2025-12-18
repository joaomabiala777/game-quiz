// src/components/QuestionCard.tsx
import { useState } from 'react';
import type { Question } from '../data/questions';

type Props = {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
};

export const QuestionCard = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer,
}: Props) => {
  // Estado para armazenar qual índice foi clicado (null se nenhum)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

  // Estado para travar os botões após o primeiro clique
  const [isAnswered, setIsAnswered] = useState(false);

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Resetar os estados locais sempre que a pergunta mudar
  

  const handleOptionClick = (index: number, isCorrect: boolean) => {
    if (isAnswered) return; // Evita múltiplos cliques

    setSelectedAnswerIndex(index);
    setIsAnswered(true);

    // Aguarda 1.5 segundos para mostrar as cores e depois chama a função do App.tsx
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  // Função para definir a cor do botão baseada no estado do jogo
  const getButtonClass = (index: number, isCorrect: boolean) => {
    const baseClass = "w-full text-left p-4 rounded-lg transition-all border-2 mb-3 ";
    
    // Se ainda não respondeu, classe padrão de hover
    if (!isAnswered) {
      return baseClass + "bg-slate-700 border-transparent hover:bg-slate-600 hover:border-slate-500";
    }

    // Se é a resposta CORRETA (sempre fica verde após responder)
    if (isCorrect) {
      return baseClass + "bg-emerald-600 border-emerald-400 text-white font-bold scale-[1.02]";
    }

    // Se o usuário selecionou ESTA resposta e ela é ERRADA
    if (selectedAnswerIndex === index && !isCorrect) {
      return baseClass + "bg-red-600 border-red-400 text-white animate-shake";
    }

    // Outras opções erradas que não foram selecionadas
    return baseClass + "bg-slate-800 border-transparent opacity-50";
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold">Pergunta {currentQuestionIndex + 1}</h2>
          <span className="text-sm text-slate-400">/{totalQuestions}</span>
        </div>
        
        <div className="h-2 w-full bg-slate-700 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <p className="text-xl text-slate-100 font-medium leading-relaxed">
          {question.questionText}
        </p>
      </div>

      <div className="flex flex-col">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            disabled={isAnswered}
            onClick={() => handleOptionClick(index, option.isCorrect)}
            className={getButtonClass(index, option.isCorrect)}
          >
            <div className="flex justify-between items-center">
              <span>{option.answerText}</span>
              {isAnswered && option.isCorrect && <span>✓</span>}
              {isAnswered && selectedAnswerIndex === index && !option.isCorrect && <span>✕</span>}
            </div>
          </button>
        ))}
      </div>

      {isAnswered && (
        <p className="text-center text-sm text-slate-400 mt-4 animate-pulse">
          Carregando próxima pergunta...
        </p>
      )}
    </div>
  );
};