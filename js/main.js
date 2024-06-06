var userEmailInput = document.getElementById('userEmail')
var userPassWordInput = document.getElementById('userPassWord')
var validitionEmpity = document.getElementById('validitionEmpity')
var validitionincorrect = document.getElementById('validitionincorrect')
var btnLogin = document.getElementById('btnLogin')
var anchor = document.querySelector("#btnLogin a")


var loginArray = [];
if (localStorage.getItem("regester") !== null) {
    signupArray = JSON.parse(localStorage.getItem("regester"));
}
loginArray = signupArray
console.log(loginArray);

function login() {
    var loginPage = {
        email: userEmailInput.value,
        password: userPassWordInput.value
    }

    console.log(loginPage);
    for (var i = 0; i < loginArray.length; i++) {
        if (loginPage.email === loginArray[i].email && loginPage.password === loginArray[i].password) {
            validitionincorrect.classList.replace("d-block" , "d-none");

            anchor.setAttribute("href", "./slider.html")

        } else {
            validitionincorrect.classList.replace('d-none', 'd-block')
           
        }
        if(loginPage.email==""){
            validitionEmpity.classList.replace('d-none', 'd-block')
        }

    }
}



btnLogin.addEventListener("click", function () {
    login()
})