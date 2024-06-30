//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('remember');
  const submitButton = document.getElementById('submit');
  const existingButton = document.getElementById('existing');

  // Check if there are saved login details in local storage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingButton.style.display = 'block';
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (rememberCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}.`);
  }

  // Function to handle "Login as existing user" button click
  function handleExistingUserLogin() {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}.`);
  }

  // Event listener for form submission
  loginForm.addEventListener('submit', handleFormSubmit);

  // Event listener for "Login as existing user" button click
  existingButton.addEventListener('click', handleExistingUserLogin);
});
