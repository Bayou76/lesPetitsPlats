function filterAndDisplayRecipes() {
  // Obtention de la valeur de recherche
  const searchTerm = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();

  // Récupération des éléments sélectionnés dans les tags
  const selectedIngredients = [];
  const selectedIngredientsSpans = document.querySelectorAll(
    ".selected-ingredient span"
  );
  for (let i = 0; i < selectedIngredientsSpans.length; i++) {
    const item = selectedIngredientsSpans[i];
    selectedIngredients.push(item.textContent.trim().toLowerCase());
  }

  const selectedAppliances = [];
  const selectedAppliancesSpans = document.querySelectorAll(
    ".selected-appliance span"
  );
  for (let i = 0; i < selectedAppliancesSpans.length; i++) {
    const item = selectedAppliancesSpans[i];
    selectedAppliances.push(item.textContent.trim().toLowerCase());
  }

  const selectedUstensils = [];
  const selectedUstensilsSpans = document.querySelectorAll(
    ".selected-utensil span"
  );
  for (let i = 0; i < selectedUstensilsSpans.length; i++) {
    const item = selectedUstensilsSpans[i];
    selectedUstensils.push(item.textContent.trim().toLowerCase());
  }

  // Effacer les recettes actuellement affichées
  const recipesListDiv = document.getElementById("recipes-list");
  recipesListDiv.innerHTML = "";

  // Tableau pour stocker les recettes filtrées
  const filteredRecipeCards = [];

  // Tableaux pour stocker les éléments uniques des recettes filtrées
  const uniqueIngredients = new Set();
  const uniqueAppliances = new Set();
  const uniqueUstensils = new Set();

  if (searchTerm.length < 3) {
    for (let i = 0; i < recipes.length; i++) {
      const recipeData = recipes[i];
      const recipe = new Recipe(recipeData);
      const recipeCard = new RecipeCard(recipe);
      filteredRecipeCards.push(recipeCard.createRecipeCard());

      // Ajouter les ingrédients, appareils et ustensiles uniques à leurs ensembles respectifs
      for (let j = 0; j < recipe._ingredients.length; j++) {
        uniqueIngredients.add(recipe._ingredients[j].ingredient.toLowerCase());
      }
      uniqueAppliances.add(recipe._appliance.toLowerCase());
      for (let j = 0; j < recipe._ustensils.length; j++) {
        uniqueUstensils.add(recipe._ustensils[j].toLowerCase());
      }
    }
  } else {
    // Parcourir toutes les recettes et vérifier les correspondances
    for (let i = 0; i < recipes.length; i++) {
      const recipeData = recipes[i];
      const recipe = new Recipe(recipeData);
      const recipeCard = new RecipeCard(recipe);

      // Vérifier si le titre, la description ou les ingrédients correspondent au terme de recherche
      const recipeTitle = recipe._name.toLowerCase();
      const recipeDescription = recipe._description.toLowerCase();
      const recipeIngredients = recipe._ingredients.map(ingredient => ingredient.ingredient.toLowerCase());

      // Vérifier si la recette correspond aux critères de recherche
      const matchesSearchTerm = recipeTitle.includes(searchTerm) || recipeDescription.includes(searchTerm) || recipeIngredients.some(ingredient => ingredient.includes(searchTerm));

      // Vérifier si la recette correspond aux éléments sélectionnés dans les tags
      const matchesSelectedTags = selectedIngredients.every(ingredient => recipeIngredients.includes(ingredient)) &&
        (selectedAppliances.length === 0 || selectedAppliances.includes(recipe._appliance.toLowerCase())) &&
        selectedUstensils.every(ustensil => recipe._ustensils.map(u => u.toLowerCase()).includes(ustensil));

      if (matchesSearchTerm && matchesSelectedTags) {
        filteredRecipeCards.push(recipeCard.createRecipeCard());

        // Ajouter les ingrédients, appareils et ustensiles uniques à leurs ensembles respectifs
        for (let j = 0; j < recipe._ingredients.length; j++) {
          uniqueIngredients.add(recipe._ingredients[j].ingredient.toLowerCase());
        }
        uniqueAppliances.add(recipe._appliance.toLowerCase());
        for (let j = 0; j < recipe._ustensils.length; j++) {
          uniqueUstensils.add(recipe._ustensils[j].toLowerCase());
        }
      }
    }
  }

  // Ajouter les cartes de recette filtrées à la div recipes-list
  for (let i = 0; i < filteredRecipeCards.length; i++) {
    recipesListDiv.appendChild(filteredRecipeCards[i]);
  }

  // Mettre à jour les filtres (tags) avec les éléments uniques des recettes filtrées
  updateFiltersTag(uniqueIngredients, uniqueAppliances, uniqueUstensils);

  // Mettre à jour le nombre de recettes affichées
  app.updateRecipeCount(filteredRecipeCards.length, searchTerm);
}

function updateFiltersTag(uniqueIngredients, uniqueAppliances, uniqueUstensils) {
  // Mettre à jour les filtres d'ingrédients
  const ingredientsFilter = document.getElementById("tag1-list");
  ingredientsFilter.innerHTML = "";
  uniqueIngredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.classList.add("tag-list-item", "list-unstyled");
    li.textContent = ingredient;
    ingredientsFilter.appendChild(li);
  });

  // Mettre à jour les filtres d'appareils
  const appliancesFilter = document.getElementById("tag2-list");
  appliancesFilter.innerHTML = "";
  uniqueAppliances.forEach(appliance => {
    const li = document.createElement("li");
    li.classList.add("tag-list-item", "list-unstyled");
    li.textContent = appliance;
    appliancesFilter.appendChild(li);
  });

  // Mettre à jour les filtres d'ustensiles
  const ustensilsFilter = document.getElementById("tag3-list");
  ustensilsFilter.innerHTML = "";
  uniqueUstensils.forEach(ustensil => {
    const li = document.createElement("li");
    li.classList.add("tag-list-item", "list-unstyled");
    li.textContent = ustensil;
    ustensilsFilter.appendChild(li);
  });
}


function updateFiltersTag(uniqueIngredients, uniqueAppliances, uniqueUstensils) {
  // Mettre à jour les filtres d'ingrédients
  const ingredientsFilter = document.getElementById("tag1-list");
  ingredientsFilter.innerHTML = "";
  uniqueIngredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.classList.add("tag-list-item", "list-unstyled");
    li.textContent = ingredient;
    ingredientsFilter.appendChild(li);
  });

  // Mettre à jour les filtres d'appareils
  const appliancesFilter = document.getElementById("tag2-list");
  appliancesFilter.innerHTML = "";
  uniqueAppliances.forEach(appliance => {
    const li = document.createElement("li");
    li.classList.add("tag-list-item", "list-unstyled");
    li.textContent = appliance;
    appliancesFilter.appendChild(li);
  });

  // Mettre à jour les filtres d'ustensiles
  const ustensilsFilter = document.getElementById("tag3-list");
  ustensilsFilter.innerHTML = "";
  uniqueUstensils.forEach(ustensil => {
    const li = document.createElement("li");
    li.classList.add("tag-list-item", "list-unstyled");
    li.textContent = ustensil;
    ustensilsFilter.appendChild(li);
  });
}
