document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('menuToggle');
  const overlayMenu = document.getElementById('overlayMenu');
  const overlayMenuList = overlayMenu.querySelector('ul');

  function closeOverlayMenuWithAnimation() {
    // Tambahkan class closing untuk animasi keluar
    overlayMenu.classList.add('closing');
    // Jangan langsung hapus .active pada toggleBtn, tunggu animasi selesai
    setTimeout(() => {
      overlayMenu.classList.remove('active', 'closing');
      toggleBtn.classList.remove('active');
    }, 1000); // waktu harus sama dengan animasi CSS
  }

  toggleBtn.addEventListener('click', () => {
    if (overlayMenu.classList.contains('active')) {
      closeOverlayMenuWithAnimation();
    } else {
      overlayMenu.classList.add('active');
      toggleBtn.classList.add('active');
    }
  });

  // Tutup overlay jika klik di luar menu list
  document.addEventListener('mousedown', function (e) {
    if (
      overlayMenu.classList.contains('active') &&
      !overlayMenuList.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeOverlayMenuWithAnimation();
    }
  });
});

  // Tutup overlay jika klik di luar menu list
  document.addEventListener('mousedown', function (e) {
    if (
      overlayMenu.classList.contains('active') &&
      !overlayMenuList.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeOverlayMenuWithAnimation();
    }
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
