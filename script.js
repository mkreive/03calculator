"use strict";

// Selectors
const inputElement = document.getElementById("input");
const answerElement = document.getElementById("answer");

const numbers = document.querySelectorAll(".number");
const actions = document.querySelectorAll(".actions");

// Code
inputElement.innerText = "0";
let numberString = [];

for (let number of numbers) {
    number.addEventListener("click", function () {
        let clickedNumber = number.innerText;

        if (number.classList.contains("number")) {
            numberString.push(clickedNumber);
            inputElement.innerText = numberString.join("");
            console.log(numberString);
        }
    });
}
