import runGame from '../index.js';

// Правило игры
const gameRule = 'What is the result of the expression?';

// Доступные операции
const operations = ['+', '-', '*'];

// Функция для получения случайного числа от 1 до 20
const getRandomNumber = () => Math.floor(Math.random() * 20) + 1;

// Функция для вычисления результата
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

// Генерация одного раунда
const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = operations[Math.floor(Math.random() * operations.length)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();

  return { question, correctAnswer };
};

// Запуск игры
const playCalcGame = () => runGame(gameRule, generateRound);

export default playCalcGame;
