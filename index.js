const ddButton = document.querySelector('.dropdown');
const ddMenu = document.querySelector('.menu');

document.addEventListener('click', function(e) {
  if(!ddButton.contains(e.target)) {
    console.log('click');
    ddMenu.classList.add('hidden');
  } else {
    ddMenu.classList.toggle('hidden');
  }
})