// imagens.js
document.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll('.projeto-card img');
  if (imagens.length === 0) return;

  const lightbox = document.createElement('div');
  const img = document.createElement('img');
  lightbox.className = 'lightbox';
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  imagens.forEach(i => {
    i.addEventListener('click', () => {
      img.src = i.src;
      lightbox.classList.add('ativo');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('ativo');
  });
});
