const elements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // No vuelve a desaparecer
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => observer.observe(el));
