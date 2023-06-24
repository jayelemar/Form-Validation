const form = document.getElementById("form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
});

// Check Required Fields
function checkRequired(inputAll) {
    inputAll.forEach( (input) =>{
        if(input.value.trim() === ""){
            showError(input, `${getFieldName()} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// Show Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show Success Message 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

