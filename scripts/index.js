"use strict";

//buttons
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

//input
const number1Field = document.getElementById("number1Field");
const number2Field = document.getElementById("number2Field");

//output
const answerField = document.getElementById("answerField");

window.onload = init;

function init(){

    addBtn.onclick = onAddBtnClicked;
    subtractBtn.onclick = onSubtractBtnClicked;
    multiplyBtn.onclick = onMultiplyBtnClicked;
    divideBtn.onclick = onDivideBtnClicked;

}


function onAddBtnClicked(){

    //get the values I know
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    //compute the values I don't know
    let answer = num1 + num2;


    //display the result.
    answerField.value = answer;
    
}

function onSubtractBtnClicked(){

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 - num2;

    answerField.value = answer;
}

function onMultiplyBtnClicked(){

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 * num2;

    answerField.value = answer;
}

function onDivideBtnClicked(){

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 / num2;

    answerField.value = answer;
}


