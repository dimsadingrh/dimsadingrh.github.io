window.addEventListener('DOMContentLoaded', function() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  // Ambil semua card dan header
  const cards = document.querySelectorAll('.card');
  const header = document.querySelector('.header');

  setTimeout(() => {
    splash.classList.add('splash-hide');

    // Trigger animasi scale up pada header dan card
    setTimeout(() => {
      header.classList.add('animated');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('animated');
        }, i * 20); // efek stagger
      });
    }, 50); // Mulai animasi saat splash mulai slide up

    // Setelah animasi selesai, hapus splash dari DOM
    setTimeout(() => {
      splash.style.display = 'none';
    }, 600);
  }, 2000);
});