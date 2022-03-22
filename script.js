"use strict";

// Selectors
const inputElement = document.getElementById("input");
const answerElement = document.getElementById("answer");
const buttons = document.querySelectorAll("button");

// Code
inputElement.innerText = "";
let actionsArray = [];

for (let button of buttons) {
    button.addEventListener("click", function () {
        let clickedButton = button.innerText;
        inputElement.innerText += clickedButton;

        if (button.innerText === "=") {
            actionsArray = inputElement.innerText.slice(0, -1);
            inputElement.innerText = "";
        }
    });
}
