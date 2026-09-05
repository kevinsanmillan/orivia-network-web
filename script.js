// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manejo del formulario de alta
const form = document.getElementById('alta-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // ValidaciÃ³n bÃ¡sica
    if (!data.nombre || !data.email || !data.telefono || !data.servicio) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Por favor, introduce un email vÃ¡lido.');
        return;
    }
    
    // AquÃ© irÃ©a la lÃ³gica para enviar los datos
    // Por ahora, mostramos un mensaje de Ã ©xito
    console.log('Datos del formulario:', data);
    
    // SimulaciÃ³n de envÃ©o
    try {
        // En producciÃ³n, aquÃ© irÃ©a una llamada a tu API o servicio
        // await fetch('/api/alta', { method: 'POST', body: JSON.stringify(data) });
        
        alert('Â¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.');
        form.reset();
    } catch (error) {
        console.error('Error al enviar:', error);
        alert('Ha ocurrido un error. Por favor, intÃ©ntalo de nuevo.');
    }
});

// Header sticky con sombra al hacer scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
    }
    lastScroll = window.scrollY;
});

// AnimaciÃ³n simple al hacer scroll (fade-in)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciÃ³n a las tarjetas
document.querySelectorAll('.servicio-card, .tarifa-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
