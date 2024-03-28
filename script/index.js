class App {
    constructor() {}
    
    async main() {
        // Récupérer la div où ajouter les cartes de recette
        const recipesListDiv = document.getElementById("recipes-list");

        // Créer des cartes de recette à partir des données de chaque recette
        const recipeCards = recipes.map(recipeData => {
            const recipe = new Recipe(recipeData); // Utilisez recipeData plutôt que recipe
            const recipeCard = new RecipeCard(recipe);
            return recipeCard.createRecipeCard();
        });

        // Ajouter les cartes de recette à la div recipes-list
        recipeCards.forEach(card => {
            recipesListDiv.appendChild(card);
        });

        // Créer la liste des ingrédients
        const ingredientsList = new IngredientList(recipes.flatMap(recipe => recipe.ingredients));
        const $ingredientWrapper = ingredientsList.createIngredientList();

        // Ajouter la liste des ingrédients à l'élément avec la classe tag1-list
        const tag1ListDiv = document.querySelector(".tag1-list");
        tag1ListDiv.appendChild($ingredientWrapper);

        // Créer la liste des appareils
        const appliances = recipes.map(recipe => recipe.appliance);
        const uniqueAppliances = [...new Set(appliances.flat())]; 
        const applianceList = new ApplianceList(uniqueAppliances);
        const $applianceWrapper = applianceList.createapplianceList();

        // Ajouter la liste des appareils à l'élément avec la classe tag2-list
        const tag2ListDiv = document.querySelector(".tag2-list");
        tag2ListDiv.appendChild($applianceWrapper);

        // Créer la liste des ustensils
        const ustensilsList = new UstensilsList(recipes.flatMap(recipe => recipe.ustensils));
        const $ustensilWrapper = ustensilsList.createUstensilList();

        // Ajouter la liste des ingrédients à l'élément avec la classe tag1-list
        const tag3ListDiv = document.querySelector(".tag3-list");
        tag3ListDiv.appendChild($ustensilWrapper);
        this.updateRecipeCount();
        
    }

    updateRecipeCount(visibleRecipeCount = 0, searchText = "") {
      const recipeCountElement = document.getElementById("number-recipes");
      let totalRecipeCount = document.querySelectorAll(".card.mt-5").length;
  
      if (visibleRecipeCount === 0) {
          if (searchText.trim() === "") {
              // Si aucun texte de recherche n'est saisi, afficher le nombre total de recettes
              recipeCountElement.textContent = `${totalRecipeCount} recette${totalRecipeCount > 1 ? "s" : ""}`;
          } else {
              // Si un texte de recherche est saisi, afficher le message personnalisé
              recipeCountElement.textContent = `Aucune recette ne contient '${searchText}', vous pouvez chercher d'autres termes comme 'tarte aux pommes', 'poisson', etc.`;
          }
      } else {
          // Afficher le nombre de recettes correspondant à la recherche
          const recipeText = `${visibleRecipeCount} recette${visibleRecipeCount > 1 ? "s" : ""}`;
          recipeCountElement.textContent = recipeText;
      }
  }
    
}


const app = new App();
app.main();
