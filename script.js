// Toggle navigation menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-visible');
});

// Simple form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name.value}! Your message has been sent.`);
});
