 let isDragging = false;
  let startPosition = 0;
  let deltaX = 0;

  const items = document.querySelectorAll('.item');
  const totalItems = items.length;

  items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
      isDragging = true;
      startPosition = e.clientX - deltaX;
    });
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    deltaX = e.clientX - startPosition;

    items.forEach((item, index) => {
      const newIndex = (index + totalItems + Math.floor(deltaX / item.clientWidth)) % totalItems;
      item.style.transform = `translateX(${(newIndex - index) * item.clientWidth + deltaX}px)`;
    });
  });