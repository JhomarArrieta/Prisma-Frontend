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
    }

    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.reset();
    }
}

function forgotPassword() {
    alert('Te enviaremos un enlace para restablecer tu contraseña 📧');
}

function logout() {
    window.location.href = 'login.html';
}

function initializeHomePage() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        const userGreeting = document.getElementById('userGreeting');
        if (userGreeting) {
            userGreeting.textContent = `Hola, ${userName}`;
        }
    }

    const likeBtn = document.querySelector('.btn-like');
    const rejectBtn = document.querySelector('.btn-reject');
    const backBtn = document.querySelector('.btn-back');
    const infoBtn = document.querySelector('.btn-info');

    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            this.style.transform = 'scale(1.2)';
            this.style.background = '#ff1744';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = '#FFB4C8';
                alert('¡Es un Match! 💖');
            }, 300);
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', function() {
            const profileCard = document.querySelector('.profile-card');
            if (profileCard) {
                profileCard.style.transform = 'translateX(-100%)';
                profileCard.style.opacity = '0';
                setTimeout(() => {
                    profileCard.style.transform = 'translateX(0)';
                    profileCard.style.opacity = '1';
                }, 500);
            }
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            alert('Regresando al perfil anterior...');
        });
    }

    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            alert('Mostrando más información del perfil...');
        });
    }
}

function handleAuthSubmit(e) {
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
        const nameInput = document.getElementById('name');
        if (nameInput && nameInput.value) {
            const firstName = nameInput.value.split(' ')[0];
            localStorage.setItem('userName', firstName);
        }
        
        window.location.href = 'home.html';
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', handleAuthSubmit);
    }

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (this.parentElement) {
                this.parentElement.style.transform = 'translateY(-2px)';
                this.parentElement.style.transition = 'transform 0.3s ease';
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.parentElement) {
                this.parentElement.style.transform = 'translateY(0)';
            }
        });
    });

    const cards = document.querySelectorAll('.profile-card, .auth-container');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});