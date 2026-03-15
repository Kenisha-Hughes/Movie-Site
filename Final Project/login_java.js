$(document).ready(function() {
  // Hardcoded admin credentials for testing
  const adminUsername = 'fscadmin';
  const adminPassword = 'admin123';

  // Toggle between Login and Register forms
  $('#registerLink').on('click', function(e) {
    e.preventDefault();
    $('#loginForm').hide();
    $('#registerForm').show();
  });

  $('#loginLink').on('click', function(e) {
    e.preventDefault();
    $('#registerForm').hide();
    $('#loginForm').show();
  });

  // Handle login form submission
  $('#loginForm').on('submit', function(e) {
    e.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();

    // Only allow admin login
    if (username === adminUsername && password === adminPassword) {
      alert('Admin login successful!');
      window.location.href = 'PaymantPage.html';
    } else {
      alert('Invalid username or password! Only admin login is allowed for testing.');
    }
  });

  // Handle registration form submission
  $('#registrationForm').on('submit', function(e) {
    e.preventDefault();
    const regUsername = $('#regUsername').val();
    const regEmail = $('#regEmail').val();
    const regPassword = $('#regPassword').val();
    const regConfirmPassword = $('#regConfirmPassword').val();

    if (regUsername && regEmail && regPassword && regConfirmPassword) {
      if (regPassword === regConfirmPassword) {
        alert('Registration successful!');
        window.location.href = 'PaymantPage.html';
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('Please fill in all fields!');
    }
  });
});
