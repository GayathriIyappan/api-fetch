document.addEventListener("DOMContentLoaded", function () {
    function handleLogin() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      if (email.trim() === "" || password.trim() === "") {
        alert("Please enter both email and password");
      } else {

        alert("Successfully logged in");
        
        window.location.replace('index.html');
      }
    }
    var loginButton = document.querySelector("#form button[type='submit']");
    if (loginButton) {
      loginButton.addEventListener("click", handleLogin);
    }
  });
  