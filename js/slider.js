var sliderArray=[];
if (localStorage.getItem("regester") !== null){
    signupArray = JSON.parse(localStorage.getItem("regester"));
}
sliderArray=signupArray

var x = sliderArray[0].name
console.log(x);

var welcom =document.getElementById('welcome').innerHTML+=x