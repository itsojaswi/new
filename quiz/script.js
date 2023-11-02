const qn = document.querySelector(".question");
const inputText = document.querySelector(".answer");
const resultElement = document.querySelector(".result");
const submitBtn = document.querySelector(".btn");

const questions = [
  {
    question: "What do you call a type of shape that has five sides?",
    answer: "Pentagon",
  },
  {
    question: "Which way is anti-clockwise, left or right?",
    answer: "Left",
  },
  {
    question: "How many equal sides does an isosceles triangle have?",
    answer: "2",
  },
  {
    question: "Which is the coldest location in the earth?",
    answer: "East Antartica",
  },
  {
    question: "Who discovered electricity?",
    answer: "Benjamin Franklin",
  },
  {
    question: "Which is the most widely spoken language in the world?",
    answer: "Mandarin",
  },
  {
    question:
      "Which two parts of the body continue to grow for your entire life?",
    answer: "Nose and Ears",
  },
  {
    question: "Who is the inventor of Television?",
    answer: "John Logie Barid",
  },
  {
    question: "The largest 'Democracy' in the world?",
    answer: "India",
  },
  {
    question: "The largest plateau in the world?",
    answer: "Tibetian Plateau",
  },
  {
    question: "Which is the instrument used to measure Blood pressure?",
    answer: "Sphygmomanometer",
  },
];

let currentQuestion;

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function displayRandomQuestion() {
  currentQuestion = getRandomQuestion();
  qn.textContent = `:-) ${currentQuestion.question}`;
}

function checkAnswer(userAnswer) {
  if (checkAnswerText(userAnswer, currentQuestion.answer)) {
    displayRandomQuestion();
    resultElement.textContent = "";
  } else {
    resultElement.textContent = "Try again!";
  }
  inputText.value = "";
}

function checkAnswerText(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}

// Initialize by displaying a random question
displayRandomQuestion();

submitBtn.addEventListener("click", () => {
  const userAnswer = inputText.value;
  checkAnswer(userAnswer);
});
