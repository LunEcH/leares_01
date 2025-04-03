// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Discord Invite Button with Loading State
const discordInvite = document.getElementById('discordInvite');
discordInvite.addEventListener('click', async (e) => {
    e.preventDefault();
    
    // Add loading state
    const originalText = discordInvite.textContent;
    discordInvite.textContent = 'Yükleniyor...';
    discordInvite.style.opacity = '0.7';
    
    try {
        // Discord sunucu davet linkini buraya ekleyin
        const discordLink = 'DISCORD_INVITE_LINK_HERE';
        window.open(discordLink, '_blank');
    } finally {
        // Reset button state
        setTimeout(() => {
            discordInvite.textContent = originalText;
            discordInvite.style.opacity = '1';
        }, 1000);
    }
});

// Enhanced Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add extra animation for feature items
            if (entry.target.classList.contains('feature-item')) {
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        }
    });
}, observerOptions);

// Animate sections on scroll with different delays
document.querySelectorAll('section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    section.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(section);
});

// Enhanced hover effects for feature items
document.querySelectorAll('.feature-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px) scale(0.95)';
    item.style.transition = 'all 0.4s ease-out';
    observer.observe(item);
    
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.03)';
        const icon = item.querySelector('.feature-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        const icon = item.querySelector('.feature-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.zIndex = '0';
    hero.insertBefore(particlesContainer, hero.firstChild);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s infinite`;
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});