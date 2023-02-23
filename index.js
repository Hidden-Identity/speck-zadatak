const forma = document.querySelector("#forma");
const input = document.querySelector("#unos");
const ul = document.querySelector("#stavke");
const a = document.querySelector("#izbrisiSve");

a.addEventListener("click", (e) => {
  e.preventDefault();
  ul.innerHTML = "";
});

forma.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (input.value.trim() === "") {
    return;
  } else {
    const li = document.createElement("li");
    li.innerText = input.value;

    ul.appendChild(li);
    input.value = "";
  }
}
