
localStorage.setItem("savedUser", "admin");
localStorage.setItem("savedPass", "1234");

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 


  const enteredUser = document.getElementById("username").value;
  const enteredPass = document.getElementById("password").value;

  const storedUser = localStorage.getItem("savedUser");
  const storedPass = localStorage.getItem("savedPass");

  const message = document.getElementById("message");


  if (enteredUser === storedUser && enteredPass === storedPass) {
    message.style.color = "green";
    message.textContent = "Login successful!";
    localStorage.setItem("isLoggedIn", "true");
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});