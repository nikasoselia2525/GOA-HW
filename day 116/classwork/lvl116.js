document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields!');
        return;
    }

    if (password !== confirmPassword) {
        document.body.style.backgroundColor = 'red';
        messageDiv.className = 'warning';
        messageDiv.textContent = 'Warning: Passwords do not match!';
        return;
    }

    document.body.style.backgroundColor = 'lightgreen';
    messageDiv.className = 'success';
    messageDiv.textContent = 'Successfully logged in';
});
