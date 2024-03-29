const taglist1 = document.querySelector('.taglist1');
const taglist2 = document.querySelector('.taglist2');
const taglist3 = document.querySelector('.taglist3');
const visible1 = document.querySelector('.tag1-visible');
const visible2 = document.querySelector('.tag2-visible');
const visible3 = document.querySelector('.tag3-visible');
const Arrow1 = document.getElementById('Arrow1');
const Arrow2 = document.getElementById('Arrow2');
const Arrow3 = document.getElementById('Arrow3');


visible1.addEventListener('click', function () {
    Arrow1.classList.toggle('rotate180');
    taglist1.classList.toggle('open');
});

visible2.addEventListener('click', function () {
    Arrow2.classList.toggle('rotate180');
    taglist2.classList.toggle('open');
});

visible3.addEventListener('click', function () {
    Arrow3.classList.toggle('rotate180');
    taglist3.classList.toggle('open');
});


// boutton croix

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const searchCloseIcon = document.getElementById('search-close');

    // Ajouter un écouteur d'événements de saisie sur le champ de recherche
    searchInput.addEventListener('input', function() {
        // Vérifier si le champ de recherche contient au moins trois caractères
        if (searchInput.value.trim().length >= 1) {
            // Si le champ de recherche contient au moins trois caractères, afficher la croix de recherche
            searchCloseIcon.style.display = 'block';
        } else {
            // Sinon, masquer la croix de recherche
            searchCloseIcon.style.display = 'none';
        }
    });

    // Ajouter un écouteur d'événements de clic sur la croix de recherche pour effacer le champ de recherche et afficher toutes les recettes
    searchCloseIcon.addEventListener('click', function() {
        // Effacer le contenu du champ de recherche
        searchInput.value = '';
        // Masquer la croix de recherche
        searchCloseIcon.style.display = 'none';
        
        // Appeler la fonction filterAndDisplayRecipes pour afficher toutes les recettes
        filterAndDisplayRecipes();
    });
});
