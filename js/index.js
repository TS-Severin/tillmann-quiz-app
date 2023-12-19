console.clear();

/* Toggle Button for Bookmark */

const bookmarkImage = document.querySelector('[data-js="bookmark-image"');

bookmarkImage.addEventListener("click", function () {
  if (bookmarkImage.src.endsWith("/resources/bookmark.png")) {
    bookmarkImage.src = "./resources/bookmark_filled.png";
  } else {
    bookmarkImage.src = "./resources/bookmark.png";
  }
});

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
