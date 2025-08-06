let currentTab = 'login';

function switchTab(tab) {
    currentTab = tab;
    const loginBtn = document.querySelector('.tab-btn:first-child');
    const registerBtn = document.querySelector('.tab-btn:last-child');
    const additionalFields = document.getElementById('additionalFields');
    const submitBtn = document.getElementById('submitBtn');
    const forgotPassword = document.getElementById('forgotPassword');
    const authTitle = document.querySelector('.auth-title');
    const authSubtitle = document.querySelector('.auth-subtitle');

    loginBtn.classList.remove('active');
    registerBtn.classList.remove('active');

    if (tab === 'login') {
        loginBtn.classList.add('active');
        additionalFields.classList.remove('show');
        submitBtn.textContent = 'Iniciar Sesión';
        forgotPassword.style.display = 'block';
        authTitle.textContent = '¡Bienvenido de vuelta!';
        authSubtitle.textContent = 'Inicia sesión para continuar tu journey';
    } else {
        registerBtn.classList.add('active');
        additionalFields.classList.add('show');
        submitBtn.textContent = 'Crear Cuenta';
        forgotPassword.style.display = 'none';
        authTitle.textContent = '¡Únete a Prisma!';
        authSubtitle.textContent = 'Crea tu cuenta y encuentra tu match perfecto';
    }

    document.getElementById('authForm').reset();
}

function forgotPassword() {
    alert('Te enviaremos un enlace para restablecer tu contraseña 📧');
}

document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;

    if (currentTab === 'register') {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }
    }

    submitBtn.textContent = 'Procesando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        if (currentTab === 'login') {
            alert('¡Bienvenido de vuelta a Prisma! 🔮✨');
        } else {
            alert('¡Cuenta creada exitosamente! Bienvenido a Prisma 🔮💖');
        }

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        document.getElementById('authForm').reset();
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});
