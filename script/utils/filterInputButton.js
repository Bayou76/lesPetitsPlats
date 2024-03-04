function filterAndDisplayTags() {
    // Récupérer les valeurs des champs de saisie des tags
    const tag1Input = document.getElementById('tag1-input').value.trim().toLowerCase();
    const tag2Input = document.getElementById('tag2-input').value.trim().toLowerCase();
    const tag3Input = document.getElementById('tag3-input').value.trim().toLowerCase();

    // Sélectionner les éléments de liste des tags
    const tag1ListItems = document.querySelectorAll('.tag1-list .tag-list-item-name'); 
    const tag2ListItems = document.querySelectorAll('.tag2-list .tag-list-item-name');
    const tag3ListItems = document.querySelectorAll('.tag3-list .tag-list-item-name');

    // Parcourir les éléments de liste des tags et afficher ou masquer en fonction des termes de recherche
    // Parcours des éléments de la première liste de tags
    for (let i = 0; i < tag1ListItems.length; i++) {
        const item = tag1ListItems[i];
        const itemName = item.textContent.trim().toLowerCase();
        const itemContainer = item.parentElement;
        if (itemName.includes(tag1Input)) {
            itemContainer.style.display = 'block';
        } else {
            itemContainer.style.display = 'none';
        }
    }

    // Parcours des éléments de la deuxième liste de tags
    for (let i = 0; i < tag2ListItems.length; i++) {
        const item = tag2ListItems[i];
        const itemName = item.textContent.trim().toLowerCase();
        const itemContainer = item.parentElement;
        if (itemName.includes(tag2Input)) {
            itemContainer.style.display = 'block';
        } else {
            itemContainer.style.display = 'none';
        }
    }

    // Parcours des éléments de la troisième liste de tags
    for (let i = 0; i < tag3ListItems.length; i++) {
        const item = tag3ListItems[i];
        const itemName = item.textContent.trim().toLowerCase();
        const itemContainer = item.parentElement;
        if (itemName.includes(tag3Input)) {
            itemContainer.style.display = 'block';
        } else {
            itemContainer.style.display = 'none';
        }
    }
}