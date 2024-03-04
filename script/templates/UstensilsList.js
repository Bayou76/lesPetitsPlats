class UstensilsList {
    constructor(ustensils) {
        this._ustensils = ustensils;
    }

    createUstensilList() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("col");

        const uniqueUstensils = new Set(); // Créer un ensemble pour stocker les ustensiles uniques

        // Parcourir la liste d'ustensiles et ajouter les noms d'ustensiles uniques à l'ensemble
        this._ustensils.forEach(ustensil => {
            const ustensilName = ustensil.charAt(0).toUpperCase() + ustensil.slice(1);
            uniqueUstensils.add(ustensilName);
        });

        let recipeCard = ''; // Initialisez une chaîne vide pour stocker les éléments de liste

        // Parcourir l'ensemble d'ustensiles uniques et créer les éléments de liste correspondants
        uniqueUstensils.forEach(ustensilName => {
            recipeCard += `
                <li class="tag-list-item">
                    <span class="tag-list-item-name">${ustensilName}</span>
                </li>
            `;
        });

        recipeCard = `<ul class="tag-list list-unstyled ">${recipeCard}</ul>`;

        $wrapper.innerHTML = recipeCard;
        return $wrapper;
    }
}

  