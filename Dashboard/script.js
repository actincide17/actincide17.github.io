// Predefined users
const users = {
    user1: 'Admin',
    user2: 'password'
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match the predefined users
    if (users[username] && users[username] === password) {
        localStorage.setItem('username', username);
        document.getElementById('message').textContent = 'Login successful! Data saved in local storage.';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
