"use strict";

// Selectors
const actionsElement = document.getElementById("actions");
const answerElement = document.getElementById("answer");

const numberButtons = document.querySelectorAll(".number");

const actionButtons = document.querySelectorAll(".actions");

// Code

for (let button of numberButtons) {
    button.addEventListener("click", function () {
        console.log(button.innerText);
    });
}
