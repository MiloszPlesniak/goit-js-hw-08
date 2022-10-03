var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const inputEmail = form.firstElementChild.;
const inputMessege = inputEmail.nextElementSibling;



form.addEventListener('submit', (event) => {
    // event.preventDefault()
    let items = {
        Email: event.target[0].value,
        Message: event.target[1].value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(items))
    
})
inputEmail.textContent = ""
console.log(inputEmail.target)
