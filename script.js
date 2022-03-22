"use strict";

// Selectors
const inputElement = document.getElementById("input");
const answerElement = document.getElementById("answer");
const buttons = document.querySelectorAll("button");

// Code

for (let button of buttons) {
    button.addEventListener("click", function () {
        let clickedButton = button.innerText;
        prevButton = button;
        let inputValue = inputElement.innerHTML;
        inputElement.innerText += clickedButton;
        console.log(clickedButton);

        // if (button.classList.contains("actions") &&)

        if (clickedButton === "C") {
            inputElement.innerText = "";
            answerElement.innerText = "";
        } else if (clickedButton === "=") {
            inputElement.innerText = inputValue.split(0, -1);
            let equation = inputValue;

            equation = equation
                .replace(/x/g, "*")
                .replace(/÷/g, "/")
                .replace(/\^/g, "**");
            console.log(equation);
            answerElement.innerText = eval(equation);
        }
    });
}
