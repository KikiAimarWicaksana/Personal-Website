var navLinks = document.querySelector('.nav-links');
var menuToggle = document.querySelector('.menu-toggle');
var navbar = document.querySelector('.navbar');

function toggleMenu() {
  navLinks.classList.toggle('show');
  navbar.classList.toggle('show');
}

function closeMenu() {
  navLinks.classList.remove('show');
  navbar.classList.remove('show');
}

menuToggle.addEventListener('click', toggleMenu);

var navLinksArray = document.querySelectorAll('.nav-links a');
navLinksArray.forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

// // Contoh fungsi untuk menangani perpindahan ke bagian "Skills"
// function scrollToSkills() {
//     var skillsSection = document.getElementById('skills');
//     skillsSection.scrollIntoView({ behavior: 'smooth' });
// }

// // Tautan pada navbar
// <a href="#" onclick="scrollToSkills()">Skills</a>
// JavaScript code for a simple number guessing game

// JavaScript code for the Snake game

// JavaScript code for the Snake game

function openProject(projectName) {
  // Gantilah URL sesuai dengan proyek yang sesuai
  window.location.href = projectName + '.html';
}
