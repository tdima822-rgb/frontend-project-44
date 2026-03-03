#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Функция для проверки чётности числа
const isEven = (number) => number % 2 === 0;

// Функция для получения случайного числа от 1 до 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Основная логика игры
const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsToWin = 3;
  
  for (let round = 0; round < roundsToWin; round++) {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // Завершаем игру при ошибке
    }
    
    console.log('Correct!');
  }
  
  // Если дошли сюда - игрок выиграл
  console.log(`Congratulations, ${name}!`);
};

// Запускаем игру
playGame();