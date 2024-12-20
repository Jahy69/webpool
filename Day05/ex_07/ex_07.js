window.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector(".cart-btn")
  let background = document.querySelector("body")
  btn.innerText = "CHANGE COLOR"
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  btn.addEventListener("click", (event) => {
    background.style.background = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
  });
});
