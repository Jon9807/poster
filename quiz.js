// quiz.js
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let questions;
let currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  } else {
    endGame();
  }
});

function startGame() {
  startButton.classList.add('hide');
  nextButton.classList.remove('hide');
  questionContainerElement.classList.remove('hide');
  questions = [
    {
      question: 'What does CIT stand for?',
      answers: [
        { text: 'Creative Innovation Technique', correct: false },
        { text: 'Computational Integration Technology', correct: false },
        { text: 'Computer and Information Technology', correct: true },
        { text: 'Consumer Information Terminal', correct: false }
      ]
    },
    {
        question: 'Which one of these is a concentration of CIT',
        answers: [
          { text: 'Hacking', correct: false },
          { text: 'Cybersecurity', correct: true },
          { text: 'Coder', correct: false },
          { text: 'Consultant', correct: false }
        ]
      },
      {
        question: 'How many Concentrations of CIT are there?',
        answers: [
          { text: '4', correct: true },
          { text: '6', correct: false },
          { text: '8', correct: false },
          { text: '5', correct: false }
        ]
      },
      {
        question: 'What concentration would a software developer fall into?',
        answers: [
          { text: 'Networking', correct: false },
          { text: '32', correct: false },
          { text: 'Data Management', correct: false },      
          { text: 'Software', correct: true }
    
        ]
      },
      {
        question: 'What concentration would a network admin fall into?',
        answers: [
          { text: 'Networking', correct: true },
          { text: '32', correct: false },
          { text: 'Data Management', correct: false },      
          { text: 'Software', correct: false }
    
        ]
      },
      {
        question: 'What concentration would a cybersecurity expert fall into?',
        answers: [
          { text: 'Networking', correct: false },
          { text: 'Cybersecurity', correct: true },
          { text: 'Data Management', correct: false },      
          { text: 'Software', correct: false }
    
        ]
      },
      {
        question: 'What concentration is this description from: "Design, configure, secure, and maintain IT networks"',
        answers: [
          { text: 'Cybersecurity', correct: false },
          { text: 'Software', correct: false },
          { text: 'Data Management', correct: false },      
          { text: 'Networking', correct: true }
    
        ]
      },
      {
        question: 'What concentration is this description from: "Protect information assets of an organization"',
        answers: [
          { text: 'Networking', correct: false },
          { text: 'Cybersecurity', correct: true },
          { text: 'Data Management', correct: false },      
          { text: 'Software', correct: false }
    
        ]
      },
      {
        question: 'What concentration is this description from: "Design, implement, program, and maintain data and databases"',
        answers: [
          { text: 'Networking', correct: false },
          { text: 'Cybersecurity', correct: false },
          { text: 'Data Management', correct: true },      
          { text: 'Software', correct: false }
    
        ]
      },
      {
        question: 'What concentration is this description from: "Design, write, install, and maintain a variety of software applications for the web and mobile"',
        answers: [
          { text: 'Networking', correct: false },
          { text: 'Cybersecurity', correct: false },
          { text: 'Data Management', correct: false },      
          { text: 'Software', correct: true }
    
        ]
      }
    ];
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(selectedButton, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    if (button !== selectedButton) {
      setStatusClass(button, button.dataset.correct);
    }
  });
  nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct === 'true') {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function endGame() {
  questionContainerElement.classList.add('hide');
  nextButton.classList.add('hide');
  startButton.innerText = 'Restart';
  startButton.classList.remove('hide');
}
