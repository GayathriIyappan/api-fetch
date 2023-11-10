document.addEventListener("DOMContentLoaded", function () {

    function handleFormSubmission(event) {
      event.preventDefault(); 

      if (validateForm()) {
        alert("Successfully registered");
        
        window.location.replace('login.html');
      }
    }
  

    function validateForm() {
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var password2 = document.getElementById("password2").value;
  
      if (username.trim() === "" || email.trim() === "" || password.trim() === "" || password2.trim() === "") {
        alert("Please fill in all fields");
        return false;
      }
  
  
      return true;
    }

    var form = document.getElementById("form");
    if (form) {
      form.addEventListener("submit", handleFormSubmission);
    }
  });
  