var _a;
(_a = document.getElementById('toggle-skills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillsSection.classList.toggle('hidden');
    }
});
