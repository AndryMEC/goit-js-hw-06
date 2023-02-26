let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const result = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');

function btnIncrement() {
    result.textContent = counterValue += 1;
}


function btnDecrement() {
    result.textContent = counterValue -= 1;
}

increment.addEventListener("click", btnIncrement);
decrement.addEventListener("click", btnDecrement);