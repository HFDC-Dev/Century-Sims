function search() {
    const input = document.getElementById('site-search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const city = card.getAttribute('data-city').toLowerCase();
        if (city.includes(input)) {
            card.style.display = 'block'; // Afficher la carte si la ville correspond à la recherche
        } else {
            card.style.display = 'none'; // Masquer la carte sinon
        }
    });
}

// Réinitialiser quand le champ de texte est vide

function searchOnChange() {
    const input = document.getElementById('site-search').value.toLowerCase();
    if (input === '') {
        resetResults();
    } else {
        search();
    }
}

function resetResults() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'block'; // Afficher toutes les cartes
    });
}
