"use strict";

// Selectors
const inputElement = document.getElementById("input");
const answerElement = document.getElementById("answer");
const buttons = document.querySelectorAll("button");

// Code

for (let button of buttons) {
    button.addEventListener("click", function () {
        let clickedButton = button.innerText;
        let inputValue = inputElement.innerHTML;
        inputElement.innerText += clickedButton;

        if (clickedButton === "C") {
            inputElement.innerText = "";
        } else if (clickedButton === "=") {
            inputElement.innerText = inputValue.split(0, -1);
            const equation = inputValue;
            console.log(equation);
            // const lastChar = equation[equation.length - 1];
            equation = equation
                .replace(/x/g, "*")
                .replace(/÷/g, "/")
                .replace(/\^/g, "**");
        }

        // if (button.classList.contains("actions")) {
        //     actionsArray.push(inputElement.innerText.slice(0, -1));

        //     console.log(actionsArray);
        // }
        // if (button.innerText === "=") {
        //     actionsString = inputElement.innerText.slice(0, -1).split("");
        //     inputElement.innerText = "";
        //     console.log(actionsString);

        //     for (let i = 0; i < actionsString.length; i++) {
        //         if (actionsString[i] === "/") {
        //             const answer = actionsString[i - 1] / actionsString[i + 1];
        //             console.log(answer);
        //         }
        //     }
        // }
    });
}
