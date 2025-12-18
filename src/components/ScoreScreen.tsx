// src/components/ScoreScreen.tsx

type Props = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

export const ScoreScreen = ({ score, totalQuestions, onRestart }: Props) => {
  return (
    <div className="text-center flex flex-col items-center gap-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-emerald-400">Resultado Final</h2>
      <p className="text-xl">
        Você acertou <span className="font-bold text-emerald-300 text-2xl">{score}</span> de {totalQuestions} questões!
      </p>

      <button
        onClick={onRestart}
        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-blue-500/30"
      >
        Jogar Novamente
      </button>
    </div>
  );
};