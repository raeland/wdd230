const gridbutton = document.querySelector("#grid-directory");
const listbutton = document.querySelector("#list-directory");
const display = document.querySelector(".directory");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", () => {
      display.classList.add("list");
      display.classList.remove("grid");
  });