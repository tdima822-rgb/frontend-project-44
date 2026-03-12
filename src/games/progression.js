import runGame from '../index.js';

// Правило игры
const gameRule = 'What number is missing in the progression?';

// Константы для прогрессии
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 20;
const MIN_STEP = 1;
const MAX_STEP = 5;

// Функция для генерации случайного числа в диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для создания прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

// Функция для преобразования прогрессии в строку с пропуском
const formatProgressionWithMissing = (progression, hiddenIndex) => {
  const formatted = [...progression];
  formatted[hiddenIndex] = '..';
  return formatted.join(' ');
};

// Генерация одного раунда
const generateRound = () => {
  // Генерируем случайные параметры прогрессии
  const length = getRandomNumber(MIN_LENGTH, MAX_LENGTH);
  const start = getRandomNumber(MIN_START, MAX_START);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);
  const hiddenIndex = getRandomNumber(0, length - 1);
  
  // Создаем прогрессию
  const progression = generateProgression(start, step, length);
  
  // Находим правильный ответ (спрятанное число)
  const correctAnswer = progression[hiddenIndex].toString();
  
  // Форматируем вопрос
  const question = formatProgressionWithMissing(progression, hiddenIndex);
  
  return { question, correctAnswer };
};

// Запуск игры
const playProgressionGame = () => runGame(gameRule, generateRound);

export default playProgressionGame;