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

/* Perfil */
const userProfile = {
    description: '',
    preferences: {
        relacion: 'seria',
        hijos: 'sin',
        ubicacion: 'medellin'
    },
    interests: {
        peliculas: 'accion',
        cocina: 'italiana',
        deporte: 'gym'
    }
};

let descriptionInput;
let charCount;
let saveBtn;
let editPhotoBtn;
let photoModal;
let uploadArea;
let fileInput;

document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    loadUserProfile();
    setupEventListeners();
    setupAnimations();
    console.log('Página de perfil inicializada');
});

function initializeElements() {
    descriptionInput = document.getElementById('description');
    charCount = document.getElementById('charCount');
    saveBtn = document.getElementById('saveBtn');
    editPhotoBtn = document.getElementById('editPhotoBtn');
    photoModal = document.getElementById('photoModal');
    uploadArea = document.getElementById('uploadArea');
    fileInput = document.getElementById('fileInput');
    navIcons = document.querySelectorAll('.nav-icon');
}

function setupEventListeners() {
    if (descriptionInput && charCount) {
        descriptionInput.addEventListener('input', updateCharacterCount);
        descriptionInput.addEventListener('input', autoSaveDescription);
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', handleSaveProfile);
    }

    if (editPhotoBtn) {
        editPhotoBtn.addEventListener('click', openPhotoModal);
    }

    setupModalEvents();

    navIcons.forEach(icon => {
        icon.addEventListener('click', handleNavigation);
    });

    setupFormEvents();

    addHoverEffects();
}

function setupModalEvents() {
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const uploadBtn = document.getElementById('uploadBtn');

    if (closeBtn) closeBtn.addEventListener('click', closePhotoModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closePhotoModal);
    if (uploadBtn) uploadBtn.addEventListener('click', handlePhotoUpload);

    if (uploadArea) {
        uploadArea.addEventListener('click', () => fileInput.click());
        uploadArea.addEventListener('dragover', handleDragOver);
        uploadArea.addEventListener('drop', handleDrop);
    }

    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
    }

    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target === photoModal) {
                closePhotoModal();
            }
        });
    }
}

function setupFormEvents() {
    const selects = document.querySelectorAll('.form-select');
    selects.forEach(select => {
        select.addEventListener('change', handleFormChange);
        select.addEventListener('focus', handleSelectFocus);
        select.addEventListener('blur', handleSelectBlur);
    });
}

function loadUserProfile() {
    const savedProfile = getStoredProfile();
    if (savedProfile) {
        Object.assign(userProfile, savedProfile);
        updateFormFields();
    }
}

function getStoredProfile() {
    return {
        description: 'Me encanta viajar, conocer nuevas culturas y disfrutar de una buena conversación. Busco a alguien con quien compartir aventuras y crear memorias increíbles.',
        preferences: {
            relacion: 'seria',
            hijos: 'sin',
            ubicacion: 'medellin'
        },
        interests: {
            peliculas: 'comedia',
            cocina: 'italiana',
            deporte: 'ciclismo'
        }
    };
}

function updateFormFields() {
    if (descriptionInput) {
        descriptionInput.value = userProfile.description || '';
        updateCharacterCount();
    }

    Object.keys(userProfile.preferences).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.value = userProfile.preferences[key] || '';
        }
    });

    Object.keys(userProfile.interests).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.value = userProfile.interests[key] || '';
        }
    });
}

function updateCharacterCount() {
    if (!descriptionInput || !charCount) return;
    
    const currentLength = descriptionInput.value.length;
    charCount.textContent = currentLength;
    
    if (currentLength > 450) {
        charCount.style.color = '#ff6b6b';
    } else if (currentLength > 400) {
        charCount.style.color = '#ffa726';
    } else {
        charCount.style.color = '#888';
    }
}

function autoSaveDescription() {
    if (!descriptionInput) return;
    userProfile.description = descriptionInput.value;
}

function handleFormChange(event) {
    const element = event.target;
    const category = element.closest('.preferences-column') ? 'preferences' : 'interests';
    
    userProfile[category][element.id] = element.value;
    
    element.style.borderColor = '#4CAF50';
    setTimeout(() => {
        element.style.borderColor = '';
    }, 1000);
    
    showNotification(`${capitalizeFirst(element.id)} actualizado`);
}

function handleSelectFocus(event) {
    const element = event.target;
    element.style.transform = 'translateY(-2px)';
    element.style.boxShadow = '0 5px 15px rgba(255, 180, 200, 0.2)';
}

function handleSelectBlur(event) {
    const element = event.target;
    element.style.transform = '';
    element.style.boxShadow = '';
}

function handleSaveProfile() {
    saveBtn.style.transform = 'scale(0.95)';
    saveBtn.innerHTML = '<span>Guardando...</span><span class="save-icon">⏳</span>';
    
    setTimeout(() => {
        saveProfile();
        
        saveBtn.style.transform = '';
        saveBtn.innerHTML = '<span>Guardar Cambios</span><span class="save-icon">💾</span>';
        
        showNotification('¡Perfil guardado exitosamente!', 'success');
        
        createSuccessAnimation();
    }, 1500);
}

function saveProfile() {
    console.log('Guardando perfil:', userProfile);
    // Aquí se enviarían los datos al servidor
}

function openPhotoModal() {
    if (photoModal) {
        photoModal.style.display = 'block';
        setTimeout(() => {
            photoModal.querySelector('.modal-content').style.transform = 'scale(1)';
            photoModal.querySelector('.modal-content').style.opacity = '1';
        }, 10);
    }
}

function closePhotoModal() {
    if (photoModal) {
        const modalContent = photoModal.querySelector('.modal-content');
        modalContent.style.transform = 'scale(0.9)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            photoModal.style.display = 'none';
            modalContent.style.transform = 'scale(1)';
            modalContent.style.opacity = '1';
        }, 300);
    }
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        processPhotoFile(file);
    }
}

function handleDragOver(event) {
    event.preventDefault();
    event.currentTarget.style.borderColor = '#FFB4C8';
    event.currentTarget.style.background = 'rgba(255, 240, 230, 0.7)';
}

function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        processPhotoFile(files[0]);
    }
    
    event.currentTarget.style.borderColor = '';
    event.currentTarget.style.background = '';
}

function processPhotoFile(file) {
    if (!file.type.startsWith('image/')) {
        showNotification('Por favor selecciona una imagen válida', 'error');
        return;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB límite
        showNotification('La imagen es muy grande. Máximo 5MB', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        updatePhotoPreview(e.target.result);
        showNotification('Imagen seleccionada correctamente');
    };
    reader.readAsDataURL(file);
}

function updatePhotoPreview(imageSrc) {
    const profilePhoto = document.querySelector('.profile-photo');
    const silhouette = profilePhoto.querySelector('.silhouette');
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '20px';
    
    profilePhoto.innerHTML = '';
    profilePhoto.appendChild(img);
}

function handlePhotoUpload() {
    showNotification('Foto actualizada correctamente', 'success');
    closePhotoModal();
}

function handleNavigation(event) {
    const action = event.currentTarget.dataset.action;
    
    event.currentTarget.style.transform = 'scale(1.2)';
    setTimeout(() => {
        event.currentTarget.style.transform = '';
    }, 200);
    
    switch(action) {
        case 'home':
            window.location.href = 'match.html';
            break;
        case 'chat':
            showNotification('Abriendo mensajes...');
            break;
        case 'notifications':
            showNotification('Mostrando notificaciones...');
            break;
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    
    const baseStyles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '25px',
        fontWeight: '500',
        boxShadow: '0 5px 15px rgba(255, 180, 200, 0.4)',
        zIndex: '1000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        color: 'white'
    };
    
    const typeStyles = {
        success: 'linear-gradient(135deg, #4CAF50, #45a049)',
        error: 'linear-gradient(135deg, #f44336, #da190b)',
        info: 'linear-gradient(135deg, #FFB4C8, #FF8FA3)'
    };
    
    Object.assign(notification.style, baseStyles);
    notification.style.background = typeStyles[type] || typeStyles.info;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function createSuccessAnimation() {
    const successIcon = document.createElement('div');
    successIcon.textContent = '✅';
    successIcon.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        font-size: 60px;
        z-index: 1001;
        opacity: 0;
        transition: all 0.5s ease;
    `;
    
    document.body.appendChild(successIcon);
    
    setTimeout(() => {
        successIcon.style.transform = 'translate(-50%, -50%) scale(1)';
        successIcon.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        successIcon.style.transform = 'translate(-50%, -50%) scale(0)';
        successIcon.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(successIcon)) {
                document.body.removeChild(successIcon);
            }
        }, 500);
    }, 1500);
}

function setupAnimations() {
    const profileIcon = document.querySelector('.profile-icon');
    if (profileIcon) {
        setInterval(() => {
            profileIcon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                profileIcon.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
    }
    
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX * -1 / 100);
        const moveY = (e.clientY * -1 / 100);
        document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
    });
}

function addHoverEffects() {
    const formSections = document.querySelectorAll('.form-section, .preferences-column, .interests-column');
    formSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateY(-2px)';
            section.style.boxShadow = '0 10px 30px rgba(255, 180, 200, 0.2)';
        });
        
        section.addEventListener('mouseleave', () => {
            section.style.transform = '';
            section.style.boxShadow = '';
        });
    });
    
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', () => {
            const silhouette = profilePhoto.querySelector('.silhouette');
            if (silhouette) {
                silhouette.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        profilePhoto.addEventListener('mouseleave', () => {
            const silhouette = profilePhoto.querySelector('.silhouette');
            if (silhouette) {
                silhouette.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    }
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(date) {
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function validateProfile() {
    const errors = [];
    
    if (!userProfile.description || userProfile.description.length < 20) {
        errors.push('La descripción debe tener al menos 20 caracteres');
    }
    
    if (!userProfile.preferences.relacion) {
        errors.push('Selecciona el tipo de relación que buscas');
    }
    
    if (!userProfile.preferences.ubicacion) {
        errors.push('Selecciona tu ubicación');
    }
    
    return errors;
}

setTimeout(enableAutoSave, 5000);

    if (e.key === 'Escape' && photoModal && photoModal.style.display === 'block') {
        closePhotoModal();
    }
});