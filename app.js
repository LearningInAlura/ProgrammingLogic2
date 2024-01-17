// let title = document.querySelector('h1').innerHTML = 'Secret number game';
// let paragraph = document.querySelector('p').innerHTML = 'Choose a number between 1 to 10.';

let secrectNumber = generateRandomNumber();

function displayTextOnScreen(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

displayTextOnScreen('h1', 'Secret number game');
displayTextOnScreen('p', 'Choose a number between 1 to 10');


function checkKick() {
    let kick = document.querySelector('input').value
    console.log(secrectNumber == kick)
}

function generateRandomNumber() {
    return parseInt(Math.random() * 10 + 1)
}