console.log('Hello, world!');

const displayResult = document.getElementById('display');

const decreaseButton = document.getElementById('btn-decrease');

const zeroButton = document.getElementById('btn-0');

const increaseButton = document.getElementById('btn-increase');

//data

let result = 0;

zeroButton.addEventListener('click', () => {
    result = 0;
    displayResult.innerText = result;
});

decreaseButton.addEventListener('click', () => {
    result -= 1;
    displayResult.innerText = result;
});

increaseButton.addEventListener('click', () => {
    result += 1;
    displayResult.innerText = result;
});
