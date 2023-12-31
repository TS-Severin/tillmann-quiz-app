/* Dark Mode */

const darkmode = document.querySelector('[data-js="darkmode"]');
const body = document.querySelector('[data-js="body"]');

darkmode.addEventListener("change", (event) => {
  document.body.classList.toggle("dark-mode", darkmode.checked);
});

// const darkmode = document.querySelector('[data-js="darkmode"]');
// const body = document.querySelector('[data-js="body"]');

// darkmode.addEventListener("change", (event) => {
//   document.body.classList.add("dark-mode");
//   console.log("works");
// });
