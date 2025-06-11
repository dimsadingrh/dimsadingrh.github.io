document.querySelectorAll('.activity-title').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.activity-item');
    const openItem = document.querySelector('.activity-item.open');
    const activityCard = document.querySelector('.card.activity');
    if (openItem && openItem !== item) openItem.classList.remove('open');
    item.classList.toggle('open');

    // Optional: scroll into view jika dibuka
    if (item.classList.contains('open')) {
      setTimeout(() => item.scrollIntoView({behavior: 'smooth', block: 'nearest'}), 300);
    }
  });
});

document.querySelectorAll('.activity-carousel').forEach(carousel => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Touch support for mobile/tablet
  carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('touchend', () => {
    isDown = false;
  });

  carousel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  });
});

document.querySelector('.project').addEventListener('click', function() {
  const target = document.getElementById('project-full');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});