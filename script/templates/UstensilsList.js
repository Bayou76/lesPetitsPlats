class UstensilsList {
    constructor(ustensils) {
      this._ustensils = ustensils;
    }
  
    createUstensilList() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("col");
  
        let recipeCard = `<ul class="tag-list list-unstyled ">`;

        for (let i = 0; i < this._ustensils.length; i++) {
            const ustensilName = this._ustensils[i].charAt(0).toUpperCase() + this._ustensils[i].slice(1);

            recipeCard += `
                <li class="tag-list-item">
                    <span class="tag-list-item-name">${ustensilName}</span>
                </li>
            `;
        }

        recipeCard += `</ul>`;
  
      $wrapper.innerHTML = recipeCard;
      return $wrapper;
    }
  }
  