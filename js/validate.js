const form          = document.getElementById("form");
const firstname     = document.getElementById("first-name");
const lastname      = document.getElementById("last-name");
const email         = document.getElementById("email");
const phno          = document.getElementById("phno");
const password      = document.getElementById("password");
const password2     = document.getElementById("password2");

let passwordStrength = document.getElementById("password-strength");
let lowerUpperCase = document.querySelector(".low-upper-case");
let number = document.querySelector(".one-number");
let specialChar = document.querySelector(".one-special-char");
let eightChar = document.querySelector(".eight-character");

// let lowerUpperCase = document.querySelector(".low-upper-case i");
// let number = document.querySelector(".one-number i");
// let specialChar = document.querySelector(".one-special-char i");
// let eightChar = document.querySelector(".eight-character i");

function myFunction(show){
    show.classList.toggle("fa-eye-slash");
}

function toggle(){
    if(state){
        password.setAttribute("type","password");
        state  =false;
    }
    else{
        password.setAttribute("type","text");
        state= true;
    }
}


//Event Listener for validating inputs on submit of signup
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});
//Event listener for password strength checking
password.addEventListener('keyup',(e)=>{
    e.preventDefault();
    let pass = password.value;
    checkStrength(pass);
});

function checkStrength(password){
    let strength=0;

    const result =document.querySelector(".popover-password p");

    //if contains lower and upper case
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1;
        lowerUpperCase.classList.add("text-success");
        // lowerUpperCase.classList.remove("fa-circle");
        // lowerUpperCase.classList.add("fa-check");
    }else{
        // lowerUpperCase.classList.add("fa-circle");
        // lowerUpperCase.classList.remove("fa-check");
        lowerUpperCase.classList.remove("text-success");
    }

    //if password has a number
    if(password.match(/([0-9])/)){
        strength += 1;
        number.classList.add("text-success");
        // number.classList.remove("fa-circle");
        // number.classList.add("fa-check");
    }else{
        // number.classList.add("fa-circle");
        // number.classList.remove("fa-check");
        number.classList.remove("text-success");
    }

    //if password has one special character
    if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
        strength += 1;
        specialChar.classList.add("text-success");
        // specialChar.classList.remove("fa-circle");
        // specialChar.classList.add("fa-check");
    }else{
        // specialChar.classList.add("fa-circle");
        // specialChar.classList.remove("fa-check");
        specialChar.classList.remove("text-success");
    }

    if(password.length > 7){
        strength += 1;
        eightChar.classList.add("text-success");
        // eightChar.classList.remove("fa-circle");
        // eightChar.classList.add("fa-check");
    }else{
        // eightChar.classList.add("fa-circle");
        // eightChar.classList.remove("fa-check");
        eightChar.classList.remove("text-success");
    }

    if(strength == 0){
        passwordStrength.style ='width:0%';
        result.innerText="very poor";
        result.style.color="#e3e7f1";
    }
    else if(strength == 2){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style ='width:10%';
        result.innerText="poor";
        result.style.color="#e90f10";
    }
    else if(strength == 3){
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.style ='width:60%';
        result.innerText="medium";
        result.style.color="#ffad00";
    }
    else if(strength == 4){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.style ='width:100%';
        result.innerText="strong";
        result.style.color="#02b502";
    }


}

function checkInputs(){
    //get input values
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim(); 
    const emailValue = email.value.trim();    
    const phnoValue = phno.value.trim();     
    const passwordValue = password.value.trim(); 
    const password2Value = password2.value.trim();

    var inputError =false;

    if(firstnameValue ==="")
    {   
        inputError =true;
        setErrorFor(firstname, "First Name cannot be blank");
    } else{
        inputError =false;
        setSuccessFor(firstname);
    }

    if(lastnameValue ==="")
    {
        inputError =true;
        setErrorFor(lastname, "Last Name cannot be blank");
    } else{
        inputError =false;
        setSuccessFor(lastname);
    }

    if(emailValue ==="")
    {
        inputError =true;
        setErrorFor(email, "Email cannot be blank");
    } else if(!isEmailValid(emailValue)){
        inputError =true;
        setErrorFor(email, "Email is not valid");
    } else {
        inputError =false;
        setSuccessFor(email);
    }

    if(phnoValue ==="")
    {
        inputError =true;
        setErrorFor(phno, "Phone Number cannot be blank");
    } else if (!isPhnoValid(phnoValue)){
        inputError =true;
        //checks the phno with regx
        setErrorFor(phno, "Phone Number is not in valid format");
    } else{
        inputError =false;
        setSuccessFor(phno);
    }

    if(passwordValue ==="")
    {
        inputError =true;
        setErrorFor(password, "Password cannot be blank");
    } else if(!isPasswordValid(passwordValue)){
        inputError =true;
        setErrorFor(password, "Password is not valid");
    } else{
        inputError =false;
        setSuccessFor(password);
    }

    if(password2Value ==="")
    {
        inputError =true;
        setErrorFor(password2, "Password should be retyped");
    } else if(passwordValue !== password2Value){
        inputError =true;
        setErrorFor(password2, "Passwords does not match");
    } else{
        inputError =false;
        setSuccessFor(password2);
    }

    if(inputError===false){
        alert("SIGNUP PAGE - Validation Success");
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

// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

function isEmailValid(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhnoValid(phno){
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phno);
}

function isPasswordValid(password)
{
       return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(password);
    // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

