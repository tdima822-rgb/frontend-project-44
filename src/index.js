#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Количество раундов для победы
const ROUNDS_TO_WIN = 3;

// Общая логика для всех игр
const runGame = (gameRule, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let round = 0; round < ROUNDS_TO_WIN; round++) {
    const { question, correctAnswer } = generateRound();
    
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;