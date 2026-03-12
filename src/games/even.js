import runGame from '../index.js';

// Функция для проверки чётности числа
const isEven = (number) => number % 2 === 0;

// Функция для получения случайного числа от 1 до 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Правило игры
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

// Генерация одного раунда
const generateRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

// Запуск игры
const playGame = () => runGame(gameRule, generateRound);

export default playGame;