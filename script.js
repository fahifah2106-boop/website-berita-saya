// Form Submission Alert
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim ke Redaksi KilasInfo.');
            contactForm.reset();
        });
    }

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const newsGrid = document.querySelector('.news-grid');
    
    if (searchInput && newsGrid) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const cards = newsGrid.querySelectorAll('.news-card');
            let foundCount = 0;

            cards.forEach(card => {
                const title = card.querySelector('.card-title')?.innerText.toLowerCase() || '';
                const content = card.querySelector('p')?.innerText.toLowerCase() || '';
                const category = card.querySelector('.card-category')?.innerText.toLowerCase() || '';

                if (title.includes(term) || content.includes(term) || category.includes(term)) {
                    card.style.display = 'block';
                    foundCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Handle No Results
            let noResultsMsg = document.getElementById('noResultsMsg');
            if (foundCount === 0) {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('div');
                    noResultsMsg.id = 'noResultsMsg';
                    noResultsMsg.style.textAlign = 'center';
                    noResultsMsg.style.padding = '3rem';
                    noResultsMsg.style.gridColumn = '1 / -1';
                    noResultsMsg.innerHTML = `
                        <h3 style="color: var(--text-dark);">Berita tidak ditemukan</h3>
                        <p style="color: var(--text-light);">Coba kata kunci lain atau cek ejaan kamu.</p>
                    `;
                    newsGrid.appendChild(noResultsMsg);
                }
            } else {
                if (noResultsMsg) noResultsMsg.remove();
            }
        });
    }
});

console.log('Portal Berita KilasInfo Aktif.');
