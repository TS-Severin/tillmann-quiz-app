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
