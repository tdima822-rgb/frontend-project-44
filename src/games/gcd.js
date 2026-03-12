import runGame from '../index.js';

// Правило игры
const gameRule = 'Find the greatest common divisor of given numbers.';

// Функция для получения случайного числа от 1 до 50
const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;

// Алгоритм Евклида для нахождения НОД
const findGcd = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};

// Генерация одного раунда
const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2).toString();

  return { question, correctAnswer };
};

// Запуск игры
const playGcdGame = () => runGame(gameRule, generateRound);

export default playGcdGame;
