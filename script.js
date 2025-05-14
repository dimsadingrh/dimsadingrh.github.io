document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('menuToggle');
  const overlayMenu = document.getElementById('overlayMenu');

  toggleBtn.addEventListener('click', () => {
    overlayMenu.classList.toggle('active');
    toggleBtn.classList.toggle('active'); // Toggle class active pada tombol
  });
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > lastScrollY) {
    // Scroll ke bawah, sembunyikan header
    header.classList.add('hide');
    } else {
    // Scroll ke atas, tampilkan header
    header.classList.remove('hide');
    }

    lastScrollY = window.scrollY;
});

function revealProjectsOnScroll() {
  const projects = document.querySelectorAll('.project');
  const windowHeight = window.innerHeight;

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < windowHeight - 100) {
      project.classList.add('visible');
    } else {
      project.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealProjectsOnScroll);
window.addEventListener('load', revealProjectsOnScroll);
