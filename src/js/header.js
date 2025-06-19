const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileOverlay.classList.toggle('active');
});

// Menü dışına tıklanınca kapat (isteğe bağlı)
document.addEventListener('click', (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnButton = menuToggle.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('active');
    }
});
