const ddButton = document.querySelector('.dropdown');
const ddMenu = document.querySelector('.menu');

function toggleMenu () {
  ddMenu.classList.toggle('hidden');
}

ddButton.addEventListener('click', () => toggleMenu());