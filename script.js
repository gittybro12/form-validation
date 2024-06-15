var nameE = document.getElementById('nameError')
var emailE = document.getElementById('emailError')
var ageE = document.getElementById('ageError')
var numE = document.getElementById('numError')
var passwordE = document.getElementById('passError')
var cpasswordE = document.getElementById('cPassError')
var checkE= document.getElementById('check')
var buttonE = document.getElementById('butError')
var nameInp = document.getElementById('nameInput')
var emailInp = document.getElementById('email')
var ageInp = document.getElementById('age')
var phoneInp = document.getElementById('number')
var passInp = document.getElementById('password')
var button = document.getElementById('but')
var cpassInp = document.getElementById('confirmPassword')
nameInp.onkeyup = function validateName(){
    var regex = /^[a-zA-Z]{2,}(?: [a-zA-Z]{2,})+$/;
    if(nameInp.value.length == 0){
        nameE.innerHTML = "Please enter your name"
        return false;
    }if(!nameInp.value.match(regex)){
        nameE.innerHTML = "Please enter full name"
        return false
    }nameE.innerHTML = '<i class="fa-solid fa-check"></i>'
         return true
}
emailInp.onkeyup = function validateEmail(){
  var regexE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(emailInp.value.length == 0){
    emailE.innerHTML = "Please enter your email"
    return false
  }if(!emailInp.value.match(regexE)){
    emailE.innerHTML ="Please enter a valid email"
    return false
  }emailE.innerHTML = '<i class="fa-solid fa-check"></i>'
}
ageInp.onkeyup = function validateAge(){
    var x = ageInp.value;
    if(x.length == 0||isNaN(x)){
        ageE.innerHTML = "Please enter age"
        return false
    }if(x < 18){
       ageE.innerHTML = "You are not of age"
       return false
    }ageE.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true
}
phoneInp.onkeyup = function validateNo(){
    var p = phoneInp.value
    if(p.length == 0 || isNaN(p)){
        numE.innerHTML = "Please enter phone number"
        return false
    }if(p.length < 11 || p.length > 11 ){
        numE.innerHTML = "Phnoe number is not valid"
        return false
    }numE.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true
}
passInp.onkeyup = function validatePass(){
    if(passInp.value.length == 0){
        passwordE.innerHTML = "Please enter password"
        return false
    }if(passInp.value.length < 8){
        passwordE.innerHTML = "Password should be more than 8 characters"
        return false
    }passwordE.innerHTML = '<i class="fa-solid fa-check"></i>'
}
cpassInp.onkeyup = function validateCpass(){
    var pass = passInp.value
if(cpassInp.value.length == 0){
    cpasswordE.innerHTML = "Please enter password"
    return false
}if(!cpassInp.value.match(pass)){
    cpasswordE.innerHTML = "Wrong password"
    return false
}cpasswordE.innerHTML = '<i class="fa-solid fa-check"></i>'
}
function validateForm(){
    if(!validateName()|| !validateEmail()|| !validateAge()||!validateNo()|| !validatePass()|| !validateCpass()){
        buttonE.innerHTML = "Please complete form"
        return false
    }
}



