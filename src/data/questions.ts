// src/data/questions.ts

export type Question = {
  questionText: string;
  answerOptions: {
    answerText: string;
    isCorrect: boolean;
  }[];
};

export const questions: Question[] = [
  {
    questionText: "Qual é a capital da França?",
    answerOptions: [
      { answerText: "Nova York", isCorrect: false },
      { answerText: "Londres", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Quem é o CEO da Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "O iPhone foi criado por qual empresa?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Quantos livros tem a saga Harry Potter?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
  {
    questionText: "Qual é o maior planeta do sistema solar?",
    answerOptions: [
      { answerText: "Saturno", isCorrect: false },
      { answerText: "Terra", isCorrect: false },
      { answerText: "Júpiter", isCorrect: true },
      { answerText: "Marte", isCorrect: false },
    ],
  },
  {
    questionText: "Em que continente fica o deserto do Saara?",
    answerOptions: [
      { answerText: "Ásia", isCorrect: false },
      { answerText: "África", isCorrect: true },
      { answerText: "América do Sul", isCorrect: false },
      { answerText: "Oceania", isCorrect: false },
    ],
  },
  {
    questionText: "Quem pintou a obra famosa “Mona Lisa”?",
    answerOptions: [
      { answerText: "Pablo Picasso", isCorrect: false },
      { answerText: "Vincent van Gogh", isCorrect: false },
      { answerText: "Michelangelo", isCorrect: false },
      { answerText: "Leonardo da Vinci", isCorrect: true },
    ],
  },
  {
    questionText: "Qual é o idioma mais falado no mundo?",
    answerOptions: [
      { answerText: "Mandarim", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Espanhol", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
    ],
  },
  {
    questionText: "Qual elemento químico tem o símbolo O?",
    answerOptions: [
      { answerText: "Ouro", isCorrect: false },
      { answerText: "Ósmio", isCorrect: false },
      { answerText: "Oxigénio", isCorrect: true },
      { answerText: "Ozônio", isCorrect: false },
    ],
  },
  {
    questionText: "Quem Desenvolveu esse jogo?",
    answerOptions: [
      { answerText: "Alberto Mabiala", isCorrect: false },
      { answerText: "Esperança Mabiala", isCorrect: false },
      { answerText: "João Cumbo Mabiala", isCorrect: true },
      { answerText: "Elisa Luvuno Mabiala", isCorrect: false },
    ],
  },
];
