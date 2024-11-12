// Script de inicio de sesión
const users = [
    { email: "usuario1@example.com", password: "contraseña1" },
    { email: "usuario2@example.com", password: "contraseña2" }
];

document.getElementById('loginForm').addEventListener('submit', function(event ) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        window.location.href = 'dashboard.html'; // Redirigir a la página de acceso
    } else {
        alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    }
});
