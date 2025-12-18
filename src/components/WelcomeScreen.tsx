import img from "../assets/img/brain.png";

type Props = {
  onStart: () => void;
};

export const WelcomeScreen = ({ onStart }: Props) => {
  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Quiz!</h1>

      <p className="text-slate-300 mb-8">
        Teste o seu conhecimento e prove a sua sabedoria.
      </p>

      <img
        src={img}
        alt="Jogo de lógica"
        className="w-64 mx-auto mb-6 drop-shadow-lg"
      />

      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-500 transition px-8 py-3 rounded-lg text-lg font-semibold shadow-md"
      >
        Começar Jogo
      </button>
      <p className="text-sm italic text-slate-400 mt-8">
        All Right Reserved. By João Cumbo Mabiala.
      </p>
    </div>
  );
};
