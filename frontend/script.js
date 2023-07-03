document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    
    // Perform further actions with the username, e.g., send to backend, display results, etc.
  });
  var username = '';
  document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    username += document.getElementById('username').value;
    
    // Store the username in a variable
    var enteredUsername = username;
    
    // Perform further actions with the enteredUsername variable
    console.log(enteredUsername);
    module.exports = username;
  });
