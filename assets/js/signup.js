const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Enail is not valid');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// check passwords match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});


//localstorage

function signup(e){
  event.preventDefault();


var username = document.getElementById('username').value;
var email = document.getElementById('email').value;
var password = document.getElementById( 'password').value;


var user ={
  username: username,
  email : email,
  password: password,
}
var json = JSON.stringify(user);
localStorage.setItem(username, json);
console.log('user added')
}

function loginFun(e){
  event.preventDefault();


var username = document.getElementById('username').value;
var email = document.getElementById('email').value;
var password = document.getElementById( 'password').value;
var result = document.getElementById('result').value;

var user = localStorage.getItem(username);
var data = JSON.parse(user);
console.log(data);

if (user = null){
  result.innerHtml
}

}


//get location

var x= document.getElementById("location");

function getlocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)

  }
  else{
    alert("sorry! your browser is not supporting")
  }
}

function showPosition(position){

  var x = "your current location is ("+" latitude:"+position.coords.longitude+")";

  document.getElementById("location").innerHTML = x;
}
