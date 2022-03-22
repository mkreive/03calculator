"use strict";

// Selectors
const inputElement = document.getElementById("input");
const buttons = document.querySelectorAll("button");

// Code
let result = [];

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        let clickedButton = button.innerText;
        let inputValue = inputElement.innerHTML;

        if (clickedButton === "C") {
            result = [];
        } else if (clickedButton === "=") {
            // inputElement.innerText = inputValue.split(0, -1);
            let equation = result.join("");

            equation = equation
                .replace(/x/g, "*")
                .replace(/÷/g, "/")
                .replace(/\^/g, "**");

            answerElement.innerText = eval(equation);
        }

        let lastIndex = result.length - 1;
        let lastChar = result[lastIndex];

        if (!isNaN(lastChar) && !isNaN(clickedButton) && result.length > 0) {
            result[lastIndex] = lastChar + clickedButton;
        } else if (
            isNaN(lastChar) &&
            isNaN(clickedButton) &&
            result.length > 0
        ) {
            result[lastIndex] = clickedButton;
        } else {
            if (clickedButton != "C") result.push(clickedButton);
        }

        inputElement.innerText = result.join("");
        console.log(result);
    });
});
