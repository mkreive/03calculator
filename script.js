"use strict";

// Selectors
const actionsElement = document.getElementById("actions");
const answerElement = document.getElementById("answer");

const buttons = document.querySelectorAll("button");

// Code
actionsElement.innerText = "";
let number = [];
let actions = [];

for (let button of buttons) {
    button.addEventListener("click", function () {
        let btnValue = button.innerText;

        if (button.classList.contains("number")) {
            number.push(btnValue);
            actionsElement.innerText = number.join("");
            console.log(number);
        }
        if (button.classList.contains("actions")) {
            actions.push([number.join(""), btnValue]);
            number = [];
            console.log(actions);
        }
    });
}
