let state=false;
var password1 = document.getElementById('password');
let passwordStrength = document.getElementById("password-strength");
let lowerUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

// console.log(password1);

function myFunction(show){
    show.classList.toggle("fa-eye-slash");
}

function toggle(){
    if(state){
        password1.setAttribute("type","password");
        state  =false;
    }
    else{
        password1.setAttribute("type","text");
        state= true;
    }
}

password1.addEventListener('keyup',(e)=>{
    e.preventDefault();
    let pass = password1.value;
    // console.log(pass);
    checkStrength(pass);
});

function checkStrength(password1){
    let strength=0;

    //if contains lower and upper case
    if(password1.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1;
        lowerUpperCase.classList.remove("fa-circle");
        lowerUpperCase.classList.add("fa-check");
    }else{
        lowerUpperCase.classList.add("fa-circle");
        lowerUpperCase.classList.remove("fa-check");
    }

    //if password has a number
    if(password1.match(/([0-9])/)){
        strength += 1;
        number.classList.remove("fa-circle");
        number.classList.add("fa-check");
    }else{
        number.classList.add("fa-circle");
        number.classList.remove("fa-check");
    }

    //if password has one special character
    if(password1.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
        strength += 1;
        specialChar.classList.remove("fa-circle");
        specialChar.classList.add("fa-check");
    }else{
        specialChar.classList.add("fa-circle");
        specialChar.classList.remove("fa-check");
    }

    if(password1.length > 7){
        strength += 1;
        eightChar.classList.remove("fa-circle");
        eightChar.classList.add("fa-check");
    }else{
        eightChar.classList.add("fa-circle");
        eightChar.classList.remove("fa-check");
    }

    if(strength == 0){
        passwordStrength.style ='width:0%';
    }
    else if(strength == 2){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style ='width:10%';
    }
    else if(strength == 3){
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.style ='width:60%';
    }
    else if(strength == 4){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.style ='width:100%';
    }


}