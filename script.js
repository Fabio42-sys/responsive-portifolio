const mode = document.getElementById('mode-icon');
const body = document.body

mode.addEventListener('click', () => {
      if(mode.classList.contains('fa-moon')) {
            mode.classList.remove('fa-moon');
            mode.classList.add('fa-sun');
      } else {
            mode.classList.remove('fa-sun');
            mode.classList.add('fa-moon');
      }
});

mode.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      body.classList.toggle('dark-mode');
})