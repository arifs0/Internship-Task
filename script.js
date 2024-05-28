// script.js

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function appendCharacter(character) {
    let display = document.getElementById('display');
    if (display.innerText === '0' && character !== '.') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}
