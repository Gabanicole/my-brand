window.addEventListener(' load', () =>{
  // const params = (new URL(document.location)).searchParams;
  // const name = params.get('username');
  // const surname = params.get('password');

  const username = localStorage.getItem('NAME')
  const password = localStorage.getItem('PASSWORD')

  document.getElementById('result-username').innerHTML = username;
  document.getElementById('result-password').innerHTML = password;
  
})