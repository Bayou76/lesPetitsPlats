class IngredientList {
  constructor(ingredients) {
    this._ingredients = ingredients;
  }

  createIngredientList() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("col");

    const cardIngredients = this._ingredients
      .map((ingredient) => {
        const ingredientName =
          ingredient.ingredient.charAt(0).toUpperCase() +
          ingredient.ingredient.slice(1);

        return `
                <li class="tag-list-item">
                    <span class="tag-list-item-name">${ingredientName}</span>
                </li>
            `;
      })
      .join("");

    const recipeCard = `
                    <ul class="tag-list list-unstyled ">${cardIngredients}</ul>
                    `;

    $wrapper.innerHTML = recipeCard;
    return $wrapper;
  }
}
