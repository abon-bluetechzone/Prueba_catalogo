function filterApps(area) {
  const items = document.querySelectorAll('.app-item');
  items.forEach(item => {
    if (area === 'all' || area === 'todos' || item.classList.contains(area)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}
