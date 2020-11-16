const loginform     = document.getElementById("loginform");
const loginpassword = document.getElementById("login-password");
const email         = document.getElementById("email");


//Event Listener for validating inputs on submit of login
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkLoginInputs();
});

function checkLoginInputs(){
    //get input values
    const emailValue = email.value.trim();    
    const loginpasswordValue = loginpassword.value.trim(); 

    var loginInputError =false;

    if(emailValue ==="")
    {
        loginInputError =true;
        setErrorFor(email, "Email cannot be blank");
    } else if(!isEmailValid(emailValue)){
        loginInputError =true;
        setErrorFor(email, "Email is not valid");
    } else {
        loginInputError =false;
        setSuccessFor(email);
    }

    if(loginpasswordValue ==="")
    {
        loginInputError =true;
        setErrorFor(loginpassword, "Password cannot be blank");
    } 
    // else if(!isPasswordValid(loginpasswordValue)){
    //     setErrorFor(loginpassword, "Password is not valid");
    // } 
    else{
        loginInputError =false;
        setSuccessFor(loginpassword);
    }

    if(loginInputError===false){
        alert("LOGIN PAGE - Validation Success");
    }

}

function setErrorFor(input, message){
    // console.log(input);
    const formControl = input.parentElement; //form_control
    const small = formControl.querySelector("small");

    //add error msg in small
    small.innerText = message;

    //add error class
    formControl.className = "form_control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className="form_control success";
}

function isEmailValid(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
