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

// Datos de los matches
const matchesData = [
    { name: 'Mariana', type: 'relaciones', date: '2024-08-05', location: 'Medellín' },
    { name: 'Luisa', type: 'casual', date: '2024-08-04', location: 'Bogotá' },
    { name: 'Maria', type: 'relaciones', date: '2024-08-03', location: 'Medellín' },
    { name: 'Carla', type: 'amistad', date: '2024-08-02', location: 'Cali' },
    { name: 'Sofia', type: 'relaciones', date: '2024-08-01', location: 'Medellín' },
    { name: 'Laura', type: 'casual', date: '2024-07-31', location: 'Bogotá' },
    { name: 'Sara', type: 'relaciones', date: '2024-07-30', location: 'Medellín' },
    { name: 'Melissa', type: 'amistad', date: '2024-07-29', location: 'Cali' },
];

// Elementos del DOM
const matchCards = document.querySelectorAll('.match-card');
const relationFilter = document.getElementById('relaciones');
const timeFilter = document.getElementById('tiempo');
const locationFilter = document.getElementById('ubicacion');
const navIcons = document.querySelectorAll('.nav-icon');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    addHoverEffects();
    console.log('Aplicación de matches inicializada');
});

// Event listeners
function initializeEventListeners() {
    // Filtros
    relationFilter.addEventListener('change', applyFilters);
    timeFilter.addEventListener('change', applyFilters);
    locationFilter.addEventListener('change', applyFilters);
    
    // Click en las tarjetas de matches
    matchCards.forEach((card, index) => {
        card.addEventListener('click', () => handleMatchClick(card, index));
        card.addEventListener('mouseenter', () => handleMatchHover(card, true));
        card.addEventListener('mouseleave', () => handleMatchHover(card, false));
    });
    
    // Navegación
    navIcons.forEach(icon => {
        icon.addEventListener('click', handleNavClick);
    });
}

// Manejo de clicks en matches
function handleMatchClick(card, index) {
    const matchName = card.querySelector('.match-name').textContent;
    const matchData = matchesData[index];
    
    // Animación de click
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    // Mostrar información del match
    showMatchDetails(matchName, matchData);
}

// Mostrar detalles del match
function showMatchDetails(name, data) {
    const message = `
        ✨ Match seleccionado: ${name}
        📅 Fecha de match: ${formatDate(data.date)}
        🏷️ Tipo: ${capitalizeFirst(data.type)}
        📍 Ubicación: ${data.location}
        
        ¡Inicia una conversación! 💬
    `;
    
    alert(message);
}

// Efectos de hover
function handleMatchHover(card, isEntering) {
    const profileImage = card.querySelector('.profile-image');
    const name = card.querySelector('.match-name');
    
    if (isEntering) {
        profileImage.style.transform = 'scale(1.1) rotate(5deg)';
        name.style.color = '#FFB4C8';
        card.style.borderColor = 'rgba(255, 180, 200, 0.5)';
    } else {
        profileImage.style.transform = 'scale(1) rotate(0deg)';
        name.style.color = '#444';
        card.style.borderColor = 'rgba(255, 180, 200, 0.2)';
    }
}

// Aplicar filtros
function applyFilters() {
    const relationValue = relationFilter.value.toLowerCase();
    const timeValue = timeFilter.value;
    const locationValue = locationFilter.value;
    
    let filteredMatches = [...matchesData];
    
    // Filtrar por tipo de relación
    if (relationValue !== 'relaciones') {
        filteredMatches = filteredMatches.filter(match => 
            match.type === relationValue
        );
    }
    
    // Filtrar por ubicación
    if (locationValue !== 'Medellín') {
        filteredMatches = filteredMatches.filter(match => 
            match.location === locationValue
        );
    }
    
    // Ordenar por tiempo
    if (timeValue === 'Más antiguo') {
        filteredMatches.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (timeValue === 'Alfabético') {
        filteredMatches.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        filteredMatches.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    // Mostrar matches filtrados
    displayFilteredMatches(filteredMatches);
    
    // Animación de filtrado
    animateFilterChange();
}

// Mostrar matches filtrados
function displayFilteredMatches(filteredMatches) {
    matchCards.forEach((card, index) => {
        const cardName = card.dataset.name;
        const isVisible = filteredMatches.some(match => match.name === cardName);
        
        if (isVisible) {
            card.style.display = 'block';
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.opacity = '1';
            }, index * 50);
        } else {
            card.style.display = 'none';
        }
    });
}

// Animación de cambio de filtro
function animateFilterChange() {
    const grid = document.querySelector('.matches-grid');
    grid.style.transform = 'scale(0.95)';
    grid.style.opacity = '0.7';
    
    setTimeout(() => {
        grid.style.transform = 'scale(1)';
        grid.style.opacity = '1';
    }, 200);
}

// Manejo de navegación
function handleNavClick(event) {
    const icon = event.currentTarget;
    const iconText = icon.textContent;
    
    // Animación de click
    icon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        icon.style.transform = 'scale(1)';
    }, 200);
    
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #FFB4C8, #FF8FA3);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(255, 180, 200, 0.4);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function addHoverEffects() {
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX * -1 / 50);
        const moveY = (e.clientY * -1 / 50);
        document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
    });
    
    const heartIcon = document.querySelector('.heart-icon');
    if (heartIcon) {
        setInterval(() => {
            heartIcon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                heartIcon.style.transform = 'scale(1)';
            }, 500);
        }, 2000);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

});