const input = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === "") {
    outputSpan.textContent = "Anonymous";
  } else {
    outputSpan.textContent = event.currentTarget.value;
  }
}