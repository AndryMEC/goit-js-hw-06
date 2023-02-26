const input = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    outputSpan.textContent = event.currentTarget.value;
}