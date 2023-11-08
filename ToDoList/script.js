const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.classList.add("item");
    span.textContent = text;
    button.classList.add("delete");
    button.textContent = "Eliminar";
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    input.value = "";
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});
