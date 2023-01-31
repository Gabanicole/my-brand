function handleSubmit (){
  const name = document.getElementById('username').value
  const password = document.getElementById('password').value

  localStorage.setItem("NAME",name);
  localStorage.setItem("PASSWORD",password)

  return;
}