let string = "";
let buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    console.log(event.target.innerText);
  });
}
