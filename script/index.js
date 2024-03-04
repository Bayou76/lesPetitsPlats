class App {
    constructor() {
      this.recipeCards = [];
    }

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
        
        const searchInput = document.getElementById("search-input");
        searchInput.value = ""; // Vider la barre de recherche lors du chargement de la page
        searchInput.addEventListener("input", () => {
          filterAndDisplayRecipes();
        });

        document.getElementById("tag1-input").addEventListener("input", () => {
          filterAndDisplayTags();
        });

        document.getElementById("tag2-input").addEventListener("input", () => {
          filterAndDisplayTags();
        });

        document.getElementById("tag3-input").addEventListener("input", () => {
          filterAndDisplayTags();
        });

        window.addEventListener("DOMContentLoaded", () => {
          filterAndDisplayTags();
        });

        handleSelectedList();

      }

      updateRecipeCount(visibleRecipeCount = 0) {
        const recipeCountElement = document.getElementById("number-recipes");
        let totalRecipeCount = document.querySelectorAll(".card.mt-5").length;
    
        if (visibleRecipeCount === 0) {
          recipeCountElement.textContent = `${totalRecipeCount} recette${totalRecipeCount > 1 ? "s" : ""
            }`;
        } else {
          const recipeText =
            visibleRecipeCount === 0
              ? "Aucune recette"
              : `${visibleRecipeCount} recette${visibleRecipeCount > 1 ? "s" : ""}`;
          recipeCountElement.textContent = recipeText;
        }
    
      }
}

const app = new App();
app.main();
