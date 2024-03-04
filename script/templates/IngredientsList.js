class IngredientList {
    constructor(ingredients) {
        this._ingredients = ingredients.map(item => item.ingredient.toLowerCase()); 
    }
  
    createIngredientList() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("col");
  
        const uniqueIngredients = new Set(); // Créer un ensemble pour stocker les ingrédients uniques
  
        // Parcourir la liste d'ingrédients et ajouter les noms d'ingrédients uniques à l'ensemble
        this._ingredients.forEach(ingredient => {
            const ingredientName = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
            uniqueIngredients.add(ingredientName);
        });
  
        let cardIngredients = ''; // Initialisez une chaîne vide pour stocker les éléments de liste
  
        // Parcourir l'ensemble d'ingrédients uniques et créer les éléments de liste correspondants
        uniqueIngredients.forEach(ingredientName => {
            cardIngredients += `
                <li class="tag-list-item">
                    <span class="tag-list-item-name">${ingredientName}</span>
                </li>
            `;
        });
  
        const recipeCard = `<ul class="tag-list list-unstyled ">${cardIngredients}</ul>`;
  
        $wrapper.innerHTML = recipeCard;
        return $wrapper;
    }
  }
  