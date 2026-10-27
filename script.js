const searchInput = document.querySelector('#homepage-search, #event-search');

if (searchInput) {
  const searchStatus = document.querySelector('#search-status');
  const searchableCards = [...document.querySelectorAll('.grid article')];

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLocaleLowerCase('tr-TR');
    let visibleCount = 0;

    searchableCards.forEach((card) => {
      const matches = card.textContent.toLocaleLowerCase('tr-TR').includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    searchStatus.textContent = query ? `${visibleCount} sonuç bulundu.` : '';
  });
}