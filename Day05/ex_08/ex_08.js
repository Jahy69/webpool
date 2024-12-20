window.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#productName").innerText="Samsung 22"
  document.querySelector("#tag").remove()

  const peas = document.querySelectorAll("p");
  peas[0].innerText = "Never miss that perfect shot again."
  peas[1].innerText = "Designed to revolutionise video and photography, with beyond cinematic 16K resolution."
  peas[2].innerText = "Get yours now !"

  document.querySelector("#price").innerText = "890 €";

  const p = document.createElement("p");
  p.innerText="In cart : 0"
  document.querySelector(".content").appendChild(p);
  
  let i = 0
  document.querySelector(".cart-btn").addEventListener("click", (event) => {
    p.innerText = `In cart : ${i}`
    i++
  });
});
