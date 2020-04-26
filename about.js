const form = document.querySelector("#form");

const name = document.querySelector("#name");
const answer = document.querySelector("#answer");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

//errors
const nameError = document.querySelector("#nameError");
const answerError = document.querySelector("#answerError");
const addressError = document.querySelector("#addressError");
const emailError = document.querySelector("#emailError");


form.addEventListener("submit", validateForm)



function validateForm() {
    event.preventDefault();
    const nameValue = name.value;

    if(validateLength(nameValue, 1) === true){
        nameError.style.display = "none";
   } else  {
       nameError.style.display = "block";
}
//answer
const answerValue = name.value;

    if(validateLength(answerValue, 10) === true){
        answerError.style.display = "none";
    } else  {
        answerError.style.display = "block";
 }
//email
const emailValue = name.value;

    if(validateEmail(emailValue)) {
        addressError.style.display = "none";
    } else  {
       addressError.style.display = "block";
 }
}

//address
const addressValue = name.value;

    if(validateLength(addressValue, 15) === true){
        addressError.style.display = "none";
    } else  {
       addressError.style.display = "block";
 }




function validateLength(value, lengthCheck) {
    const trimmedValue = value.trim();

    if(trimmedValue.length >= lengthCheck) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;

    if(regEx.test(email)) {
        return true;
    } else {
        return false;
    }
}

