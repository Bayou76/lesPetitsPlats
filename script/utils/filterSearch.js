function filterAndDisplayRecipes() {
    // Obtention de la valeur de recherche
    const searchTerm = document
        .getElementById("search-input")
        .value.trim()
        .toLowerCase();

    // Récupération des éléments sélectionnés dans les tags
    const selectedIngredients = Array.from(
        document.querySelectorAll(".selected-ingredient span")
    ).map((item) => item.textContent.trim().toLowerCase());
    const selectedAppliances = Array.from(
        document.querySelectorAll(".selected-appliance span")
    ).map((item) => item.textContent.trim().toLowerCase());
    const selectedUstensils = Array.from(
        document.querySelectorAll(".selected-utensil span")
    ).map((item) => item.textContent.trim().toLowerCase());

    // Effacer les recettes actuellement affichées
    const recipesListDiv = document.getElementById("recipes-list");
    recipesListDiv.innerHTML = "";

    // Tableau pour stocker les recettes filtrées
    let filteredRecipeCards = [];

    // Si la longueur de la chaîne de recherche est inférieure à 3, afficher toutes les recettes
    if (searchTerm.length < 3) {
        // Créer les cartes de recette pour toutes les recettes disponibles
        filteredRecipeCards = recipes.map((recipeData) =>
            new RecipeCard(new Recipe(recipeData)).createRecipeCard()
        );
    } else {
        // Filtrer les recettes en fonction de la recherche et des éléments sélectionnés
        filteredRecipeCards = recipes
            .filter((recipe) => {
                const recipeTitle = recipe.name.toLowerCase();
                const recipeDescription = recipe.description.toLowerCase();
                const recipeIngredients = recipe.ingredients.map((ing) =>
                    ing.ingredient.toLowerCase()
                );

                const matchesSearchTerm =
                    recipeTitle.includes(searchTerm) ||
                    recipeDescription.includes(searchTerm) ||
                    recipeIngredients.some((ingredient) =>
                        ingredient.includes(searchTerm)
                    );

                const matchesSelectedTags =
                    selectedIngredients.every((ingredient) =>
                        recipeIngredients.includes(ingredient)
                    ) &&
                    (selectedAppliances.length === 0 ||
                        selectedAppliances.includes(recipe._appliance.toLowerCase())) &&
                    selectedUstensils.every((ustensil) =>
                        recipe.ustensils.map((u) => u.toLowerCase()).includes(ustensil)
                    );

                return matchesSearchTerm && matchesSelectedTags;
            })
            .map((recipeData) =>
                new RecipeCard(new Recipe(recipeData)).createRecipeCard()
            );
    }

    // Ajouter les cartes de recette filtrées à la div recipes-list
    filteredRecipeCards.forEach((card) => {
        recipesListDiv.appendChild(card);
    });

    // Mettre à jour le nombre de recettes affichées
    app.updateRecipeCount(filteredRecipeCards.length);
}
