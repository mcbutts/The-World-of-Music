// The World of Music - music trivia quiz (homepage)

const questions = [
  {
    question: "In what year did the long-playing (LP) vinyl record debut?",
    options: ["1948", "1963", "1982", "1999"],
    answer: 0
  },
  {
    question: "Which format did Philips introduce in 1963?",
    options: ["Compact disc", "Cassette tape", "MP3", "8-track tape"],
    answer: 1
  },
  {
    question: "In what year did compact discs (CDs) go on sale commercially?",
    options: ["1972", "1982", "1992", "2002"],
    answer: 1
  }
];

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const feedbackEl = document.getElementById("quiz-feedback");
const resultEl = document.getElementById("quiz-result");
const nextButton = document.getElementById("quiz-next");
const restartButton = document.getElementById("quiz-restart");

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = (current + 1) + ". " + q.question;
  feedbackEl.textContent = "";
  resultEl.textContent = "";
  nextButton.hidden = true;
  restartButton.hidden = true;
  optionsEl.innerHTML = "";

  q.options.forEach(function (text, index) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.addEventListener("click", function () {
      choose(index);
    });
    li.appendChild(button);
    optionsEl.appendChild(li);
  });
}

function choose(index) {
  const q = questions[current];
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach(function (button, i) {
    button.disabled = true;
    if (i === q.answer) {
      button.classList.add("correct");
    } else if (i === index) {
      button.classList.add("wrong");
    }
  });

  if (index === q.answer) {
    score++;
    feedbackEl.textContent = "Correct!";
  } else {
    feedbackEl.textContent = "Not quite. The answer is highlighted in green.";
  }

  if (current < questions.length - 1) {
    nextButton.hidden = false;
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  questionEl.textContent = "Quiz complete!";
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  resultEl.textContent = "You scored " + score + " out of " + questions.length + ".";
  restartButton.hidden = false;
}

nextButton.addEventListener("click", function () {
  current++;
  showQuestion();
});

restartButton.addEventListener("click", function () {
  current = 0;
  score = 0;
  showQuestion();
});

showQuestion();
