const openModalBtn = document.querySelector('[data-modal-open="footer"]');
const closeModalBtn = document.querySelector('[data-modal-close="footer"]');
const modal = document.querySelector('[data-modal="footer"]');
const modalContent = modal.querySelector('.footer-modal-content'); // modal-content seçimi

// Aç
openModalBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('is-hidden');

  requestAnimationFrame(() => {
    modal.classList.add('show-modal');
  });

  document.body.style.overflow = 'hidden';
});

// Kapat (X tuşu)
closeModalBtn.addEventListener('click', closeModal);

// ESC ile kapatma
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add('closing'); // Kapanış animasyonunu başlat
  modal.classList.remove('show-modal'); // Açık modal sınıfını kaldır

  modalContent.addEventListener(
    'transitionend',
    () => {
      modal.classList.remove('closing'); // Kapanış sınıfını kaldır
      modal.classList.add('is-hidden'); // Modalı gizle
    },
    { once: true }
  );

  document.body.style.overflow = 'auto';
}

// Modal dışına tıklayınca kapatma
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    closeModal();
  }
});
