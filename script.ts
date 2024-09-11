document.getElementById('toggle-skills')?.addEventListener('click', () => {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillsSection.classList.toggle('hidden');
    }
});
