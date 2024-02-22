class ApplianceList {
    constructor(appliance) {
        this._appliance = appliance;
    }
  
    createapplianceList() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("col");
  
        let recipeCard = `<ul class="tag-list list-unstyled ">`;

        // Utiliser une boucle for pour créer un élément pour chaque appareil
        for (let i = 0; i < this._appliance.length; i++) {
            const applianceName = this._appliance[i].charAt(0).toUpperCase() + this._appliance[i].slice(1);

            recipeCard += `
                <li class="tag-list-item">
                    <span class="tag-list-item-name">${applianceName}</span>
                </li>
            `;
        }

        recipeCard += `</ul>`;
  
        $wrapper.innerHTML = recipeCard;
        return $wrapper;
    }
}
