document.getElementById('createAccount').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
});

document.getElementById('loginAccount').addEventListener('click', function() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = 'home.html';  // Redirect to home page after registration
});