let string = "";
let buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    const buttonText = event.target.innerText;
    if (buttonText === "=") {
      try {
        string = eval(string);
        document.querySelector("input").value = string;
      } catch (error) {
        document.querySelector("input").value = "Error";
      }
    } else if (buttonText === "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (buttonText === "DEL") {
      if (typeof string == "string") {
        string = string.slice(0, -1);
      } else {
        string = string.toString();
        string = string.slice(0, -1);
      }
      document.querySelector("input").value = string;
    } else if (buttonText === "%") {
      string = eval(string) / 100;
      document.querySelector("input").value = string;
    } else {
      string += buttonText;
      document.querySelector("input").value = string;
    }
  });
}
