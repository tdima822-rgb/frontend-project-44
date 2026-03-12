import runGame from '../index.js';

// Правило игры
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция для получения случайного числа от 1 до 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Функция для проверки, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  
  return true;
};

// Генерация одного раунда
const generateRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

// Запуск игры
const playPrimeGame = () => runGame(gameRule, generateRound);

export default playPrimeGame;