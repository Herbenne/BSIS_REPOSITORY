document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', e => {
    const rect = card.getBoundingClientRect();

    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  })
})