const form = document.getElementById('signupForm');
const name = document.getElementById('fullName'); 
const mail = document.getElementById('email') ;
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
  // Reset custom errors
  confirmPassword.setCustomValidity("");

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  }

  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }

  form.classList.add('was-validated');
});
