const btn = document.getElementById("btn");
const container = document.querySelector(".container-input");
console.log(container);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.toggle("active");
});
