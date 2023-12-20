  let isDragging = false;
  let startPosition = 0;
  let deltaX = 0;

  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
      isDragging = true;
      startPosition = e.clientX;
    });
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    deltaX = e.clientX - startPosition;

    items.forEach(item => {
      item.style.transform = `translateX(${deltaX}px)`;
    });
  });