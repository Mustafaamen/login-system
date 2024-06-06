// regestration Page --------------------------------------
var userNameSignUp = document.getElementById("userNameSignUp");
var userEmailSignINUp = document.getElementById("userEmailSignINUp");
var userPassWordSignINUp = document.getElementById("userPassWordSignINUp");
var signUpBtn = document.getElementById("signUpBtn");
var wrongUserName = document.getElementById("wrongUserName");
var wrongEmail = document.getElementById("wrongEmail");
var dublicatedmail = document.getElementById("dublicatedmail");
var wrongPassword = document.getElementById("wrongPassword");
var successMessage = document.getElementById("successMessage");

let regesterArray = [];

if (localStorage.getItem("regester") !== null){
    signupArray = JSON.parse(localStorage.getItem("regester"));
}

function addRegester (){
    if ( validateUserName() == true && validateUserEmail() == true &&  validateUserPassword()== true){
        let signup = {
            name : userNameSignUp.value,
            email : userEmailSignINUp.value,
            password : userPassWordSignINUp.value
        }
    
        regesterArray.push(signup);
        deleteForm();
        localStorage.setItem("regester" , JSON.stringify(regesterArray));
        
    
        successMessage.classList.replace("d-none" , "d-block");
        // validitionEmpity.classList.replace("d-block" , "d-none");
    
    console.log(regesterArray);
   window.open("./index.html")
}
    }

    function deleteForm(){
        userNameSignUp.value = "";
        userEmailSignINUp.value = "";
        userPassWordSignINUp.value = "";
    }
    function validateUserName (){
    
        let regexUserName = /^[A-Z][a-z]{2,10}[0-9]{0,3}$/
    
        if(regexUserName.test(userNameSignUp.value)==true){
            wrongUserName.classList.replace("d-block","d-none");
            userNameSignUp.classList.add("is-valid");
            userNameSignUp.classList.remove("is-invalid");
            return true;
        }else if(regexUserName.test(userNameSignUp.value)==false){
            wrongUserName.classList.replace("d-none","d-block");
            userNameSignUp.classList.add("is-invalid");
            userNameSignUp.classList.remove("is-valid");

            return false;
        }
    }

    function validateUserEmail(){
        let regexUserEmail = /^[a-zA-Z0-9_.]{8,30}@(gmail|yahoo).com/
        if(regexUserEmail.test(userEmailSignINUp.value)==true){
            wrongEmail.classList.replace("d-block","d-none");
            userEmailSignINUp.classList.add('is-valid')
            userEmailSignINUp.classList.remove('is-invalid')
            return true;
        }
        // else (regexUserEmail.test(userEmailSignINUp.value)==false){
            wrongEmail.classList.replace("d-none","d-block")
            userEmailSignINUp.classList.add('is-invalid')
            userEmailSignINUp.classList.remove('is-valid')

            return false;
        }
    
    function validateUserPassword(){
        let regexUserPassword = /^[a-zA-Z0-9]{5,20}$/
        if(regexUserPassword.test(userPassWordSignINUp.value)==true){
            wrongPassword.classList.replace("d-block","d-none");
            userPassWordSignINUp.classList.add('is-valid')
            userPassWordSignINUp.classList.remove('is-invalid')
            return true
        }
        wrongPassword.classList.replace("d-none", "d-block");
        userPassWordSignINUp.classList.add('is-invalid')
        userPassWordSignINUp.classList.remove('is-valid')
        
    }

    