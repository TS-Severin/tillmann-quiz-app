console.clear();

const questionSubmit = document.querySelector('[data-js="question-submit"]');
const main = document.querySelector('[data-js="main"]');

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
});
