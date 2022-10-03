var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const inputEmail = form.firstElementChild.firstElementChild
const inputMessege = form.children[1].firstElementChild

let data = {
    Email: "",
    Messeage: ""
}

form.addEventListener('input', throttle(() => {
    data.Email = inputEmail.value;
    data.Messeage = inputMessege.value
    localStorage.setItem("feedback-form-state",JSON.stringify(data))
    

}, 500))
let actualyStorage = JSON.parse(localStorage.getItem("feedback-form-state"))

if (actualyStorage != null ) {
    inputEmail.value = actualyStorage.Email;
    inputMessege.value = actualyStorage.Messeage;
}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    localStorage.clear()
    form.reset()
    
})
