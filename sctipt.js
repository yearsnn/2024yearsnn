document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar ul li a');
    const contentSections = document.querySelectorAll('section');
    const glitchContainer = document.querySelector('.glitch-container');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            glitchContainer.style.display = 'none';
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            contentSections.forEach(section => section.style.display = 'none');
            targetSection.style.display = 'block';
        });
    });
});