window.addEventListener('DOMContentLoaded', function() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  // Pilih semua card dengan class baru
  const cards = document.querySelectorAll('.hello-there, .profile-photo, .activity, .project, .social, .contact');
  const header = document.querySelector('.header');

  setTimeout(() => {
    splash.classList.add('splash-hide');

    setTimeout(() => {
      header.classList.add('animated');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('animated');
        }, i * 20);
      });
    }, 50);

    setTimeout(() => {
      splash.style.display = 'none';
    }, 600);
  }, 2000);
});