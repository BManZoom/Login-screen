var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var loginCheckBox = document.getElementById('loginCheckBox');
var loginFormId = document.getElementById('loginFormId');

loginFormId.addEventListener('submit', function() {
    if(!emailInput.value || !passwordInput.value) {
    alert("Please fill required fields!");
    }
    else if(!loginCheckBox.checked) {
           alert('Kindly agree to terms!');
       }
    else {
        alert('Login Sucessful!');
    } 
});