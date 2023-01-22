const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');
showBtn.addEventListener('click', function(){
 if(pass_field.type === "password"){
   pass_field.type = "text";
   showBtn.textContent = "HIDE";
   showBtn.style.color = "#3498db";
 }else{
   pass_field.type = "password";
   showBtn.textContent = "SHOW";
   showBtn.style.color = "#222";
 }
});
const attemp=3;
function validate(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
   if(username =="gabanicole250@gmail.com" && password == 12345){
      
      Window.location.href = form.getAttribute("action");
     
     return false;
   }
    attemp--;
    window.confirm("you have left "+attemp+"attemp;");
    if(attemp==0){
       document.getElementById("username").disabled= true;
       document.getElementById("password").disabled= true;
     document.getElementById("submit").disabled= true;
      return false;
    }
   }


   function store(){

    var name = document.getElementById('username');
    var pw = document.getElementById('password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
      window.confirm('Please fill in email');

    }else if(pw.value.length == 0){
      window.confirm('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
      window.confirm('Please fill in email and password');

    }else if(pw.value.length > 8){
      window.confirm('Max of 8');

    }else if(!pw.value.match(numbers)){
      window.confirm('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
      window.confirm('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
      window.confirm('please add 1 lovercase letter');

    }else{
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        window.confirm('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('username');
    var userPw = document.getElementById('username');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}