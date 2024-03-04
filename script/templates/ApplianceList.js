class ApplianceList {
    constructor(appliance) {
        this._appliance = appliance.map(item => item.toLowerCase()); // Convertir les noms d'ustensiles en minuscules
    }
  
    createapplianceList() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("col");
  
        let recipeCard = `<ul class="tag-list list-unstyled ">`;
        const uniqueAppliances = new Set(); // Créer un ensemble pour stocker les appareils uniques

        // Utiliser une boucle for pour créer un élément pour chaque appareil
        for (let i = 0; i < this._appliance.length; i++) {
            const applianceName = this._appliance[i].charAt(0).toUpperCase() + this._appliance[i].slice(1);
            uniqueAppliances.add(applianceName);
        }

        // Parcourir l'ensemble d'appareils uniques et créer les éléments de liste correspondants
        uniqueAppliances.forEach(applianceName => {
            recipeCard += `
                <li class="tag-list-item">
                    <span class="tag-list-item-name">${applianceName}</span>
                </li>
            `;
        });

        recipeCard += `</ul>`;
  
        $wrapper.innerHTML = recipeCard;
        return $wrapper;
    }
}
