console.clear();

const questionSubmit = document.querySelector('[data-js="question-submit"]');
const main = document.querySelector('[data-js="main"]');

/* may character count */

const MAX_CHARACTERS = 150;
const form = document.querySelector('[data-js="form"]');

const questionInput = document.querySelector('[data-js="questionarea"]');
const answerInput = document.querySelector('[data-js="answerarea"]');

const characterLeftElementQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const characterLeftElementAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

questionInput.addEventListener("input", (event) => {
  characterLeftElementQuestion.textContent =
    MAX_CHARACTERS - parseInt(event.target.value.length);
});

answerInput.addEventListener("input", (event) => {
  characterLeftElementAnswer.textContent =
    MAX_CHARACTERS - parseInt(event.target.value.length);
});

/* new question card for input */

questionSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  const newQuestionCard = document.createElement("div");
  newQuestionCard.classList.add("card-container1");
  main.append(newQuestionCard);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const yourAnswer = data.youranswer;
  const yourQuestion = data.yourquestion;
  const yourTag = data.yourtag;

  newQuestionCard.innerHTML = `
    


  <div class="card-container" id="question1">
  <img
    class="bookmark"
    src="./resources/bookmark.png"
    alt="bookmark icon"
    data-js="bookmark-image"
  />
  
  <p class="question">
    ${yourQuestion}
  </p>
  <button class="answer-button" data-js="answer-button">
    Show Answer
  </button>
  <p class="answer" data-js="answer">${yourAnswer}</p>
  <div class="tag">
    <button class="tag-button">${yourTag}</button>
  </div>
  </div>
    `;

  /* Show Answers when clicking on Show-Answer-button */

  const answer = document.querySelector('[data-js="answer"]');

  const answerButton = document.querySelector('[data-js="answer-button"]');

  answer.classList.add("hidden");

  answerButton.addEventListener("click", (event) => {
    answer.classList.toggle("hidden");
    if (answerButton.innerText === "Show Answer") {
      answerButton.innerText = "Hide Answer";
    } else {
      answerButton.innerText = "Show Answer";
    }
  });
});
