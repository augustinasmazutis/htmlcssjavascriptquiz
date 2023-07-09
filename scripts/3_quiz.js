// VARIABLES
// -- dom elements
const quizQuestionElement = document.querySelector('.quiz__question');
const questionElemet = document.querySelector('.question');
const answersBtnsElement = document.querySelector('.answers-btns');

const startBtnElement = document.querySelector('#start-btn');
const nextBtnElement = document.querySelector('#next-btn');

const resultElement = document.querySelector('#result');

// -- logic
let questions = [];
let index;
let score = 0;

const QUESTIONS_ENDPOINT = location.href.includes('html.html')
  ? '../data/HTML_questions.json'
  : location.href.includes('css.html')
  ? '../data/CSS_questions.json'
  : '../data/JS_questions.json';

let btnClass = location.href.includes('html.html')
  ? 'btn-html'
  : location.href.includes('css.html')
  ? 'btn-css'
  : 'btn-js';

// FUNCTIONS
// -- starting quiz (after pressing "START QUIZ")
const startQuiz = () => {
  startBtnElement.classList.add('hide');

  quizQuestionElement.classList.remove('hide');

  index = 0;
  setNextQuestion();
};

// -- reseting "NEXT QUESTION" button and setting new question
const setNextQuestion = () => {
  resetState();
  showQuestion(questions[index]);
};

// -- showing question and answers from questions array
const showQuestion = (question) => {
  questionElemet.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement('button');

    button.innerText = answer.text;
    button.classList.add('btn', btnClass);

    if (answer.correct) button.dataset.correct = answer.correct;

    button.addEventListener('click', selectAnswer);

    answersBtnsElement.appendChild(button);
  });
};

// -- selecting answer (by clicking on it's button)
const selectAnswer = (e) => {
  let correct = e.target.dataset.correct;

  if (correct) {
    e.target.classList.add('btn-correct');
    e.target.innerHTML += ` <i class="fa-solid fa-check"></i>`;
    score++;
  } else {
    e.target.classList.add('btn-wrong');
    e.target.innerHTML += ` <i class="fa-solid fa-xmark"></i>`;
  }

  Array.from(answersBtnsElement.children).forEach(
    (button) => (button.disabled = true)
  );

  if (questions.length > index + 1) {
    nextBtnElement.classList.remove('hide');
  } else {
    startBtnElement.innerText = 'RESTART QUIZ';
    startBtnElement.classList.remove('hide');

    resultElement.classList.remove('hide');
    resultElement.innerText = `Score: ${score}`;
  }
};

// -- showing next question (after pressing "NEXT QUESTION")
const showNextQuestion = () => {
  index++;
  setNextQuestion();
};

// -- restsing "NEXT QUESTION" button and answers button (removing previous ones)
const resetState = () => {
  nextBtnElement.classList.add('hide');

  while (answersBtnsElement.firstChild) {
    answersBtnsElement.removeChild(answersBtnsElement.firstChild);
  }
};

// EVENTS
document.addEventListener('DOMContentLoaded', () => {
  fetch(QUESTIONS_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      questions.push(...data);
    });
});

startBtnElement.addEventListener('click', startQuiz);
nextBtnElement.addEventListener('click', showNextQuestion);
