const input = document.querySelector('#validation-input');
let dataLength = input.getAttribute('data-length');
dataLength = Number(dataLength);

input.addEventListener('blur', onInputBlure);

function onInputBlure() {
    if (input.value.length === dataLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    
};