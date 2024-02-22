document.addEventListener('click', function(event) {
  for (let i = 0; i < 3; i++) {
    createFirework(event.clientX, event.clientY);
  }
});

function createFirework(x, y) {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.left = x + 'px';
  firework.style.top = y + 'px';
  firework.style.backgroundColor = color;
  document.querySelector('.firework-container').appendChild(firework);
  setTimeout(function() {
    firework.remove();
  }, 1000);
}