// Fonction pour supprimer un élément de la liste
function removeListItem(listElement, itemName) {
  const items = listElement.querySelectorAll(".tag-list-item");
  let listItemToRemove = null;

  // Parcourir tous les éléments de la liste
  for (let i = 0; i < items.length; i++) {
      const item = items[i];
      // Vérifier si le texte de l'élément correspond à l'élément à supprimer
      if (item.textContent.trim().toLowerCase() === itemName.toLowerCase()) {
          listItemToRemove = item;
          break;
      }
  }

  // Vérifier si un élément a été trouvé à supprimer
  if (listItemToRemove) {
      // Si oui, le supprimer
      listItemToRemove.remove();
      // Vérifier si la barre de recherche contient du texte
      if (document.getElementById('search-input').value.trim() !== '') {
          // Si oui, filtrer et afficher les recettes
          filterAndDisplayRecipes();
      }
  }
}

// Fonction pour restaurer un élément dans la liste
function restoreListItem(listElement, itemName) {
  const listItem = document.createElement("li");
  listItem.classList.add("tag-list-item", "list-unstyled");
  listItem.innerHTML = `<span class="tag-list-item-name">${itemName}</span>`;
  listElement.appendChild(listItem);
}


function addSelectedItem(itemName, listElement, categoryClass) {
  const selectedItem = document.createElement("div");
  selectedItem.classList.add(
      categoryClass,
      "d-inline-flex",
      "align-items-center"
  );
  selectedItem.innerHTML = `<span class="item-name">${itemName}</span><div class="remove-item">&times;</div>`;
  const removeButton = selectedItem.querySelector(".remove-item");

  // clics sur le bouton de suppression
  removeButton.addEventListener("click", () => {
      // Supprimer l'élément sélectionné
      selectedItem.remove();
      // Restaurer l'élément dans la liste des éléments d'origine
      restoreListItem(listElement, itemName);
      // Filtrer et afficher les recettes en fonction des éléments sélectionnés
      filterAndDisplayRecipesBySelectedItems();
      // Si la barre de recherche n'est pas vide, filtrer et afficher les recettes
      if (document.getElementById('search-input').value.trim() !== '') {
          filterAndDisplayRecipes();
      }
  });
  // Récupérer la liste des éléments sélectionnés
  const selectedList = document.querySelector(".selected-list");
  // Ajouter l'élément sélectionné à la liste des éléments sélectionnés
  selectedList.appendChild(selectedItem);
  // Supprimer l'élément de la liste d'origine
  removeListItem(listElement, itemName);
  // Filtrer et afficher les recettes en fonction des éléments sélectionnés
  filterAndDisplayRecipesBySelectedItems();
  // Si la barre de recherche n'est pas vide, filtrer et afficher les recettes
  if (document.getElementById('search-input').value.trim() !== '') {
      filterAndDisplayRecipes();
  }
}


function handleSelectedList() {
  const tag1List = document.getElementById("tag1-list");
  const tag2List = document.getElementById("tag2-list");
  const tag3List = document.getElementById("tag3-list");

  // clics sur les éléments de la liste d'ingrédients
  tag1List.addEventListener("click", (event) => {
      const clickedItem = event.target.closest(".tag-list-item");
      if (clickedItem) {
          const itemName = clickedItem.querySelector(
              ".tag-list-item-name"
          ).textContent;
          addSelectedItem(itemName, tag1List, "selected-ingredient");
      }
  });

  // clics sur les éléments de la liste d'appareils
  tag2List.addEventListener("click", (event) => {
      const clickedItem = event.target.closest(".tag-list-item");
      if (clickedItem) {
          const itemName = clickedItem.querySelector(
              ".tag-list-item-name"
          ).textContent;
          addSelectedItem(itemName, tag2List, "selected-appliance");
      }
  });

  // clics sur les éléments de la liste d'ustensiles
  tag3List.addEventListener("click", (event) => {
      const clickedItem = event.target.closest(".tag-list-item");
      if (clickedItem) {
          const itemName = clickedItem.querySelector(
              ".tag-list-item-name"
          ).textContent;
          addSelectedItem(itemName, tag3List, "selected-utensil");
      }
  });
}

  

  

// Filtrer et afficher les recettes en fonction des éléments sélectionnés
function filterAndDisplayRecipesBySelectedItems() {
  // Récupérer les ingrédients sélectionnés
  const selectedIngredients = [];
  const selectedIngredientSpans = document.querySelectorAll(".selected-ingredient span");
  selectedIngredientSpans.forEach(item => {
      selectedIngredients.push(item.textContent.trim().toLowerCase());
  });

  // Récupérer les appareils sélectionnés
  const selectedAppliances = [];
  const selectedApplianceSpans = document.querySelectorAll(".selected-appliance span");
  selectedApplianceSpans.forEach(item => {
      selectedAppliances.push(item.textContent.trim().toLowerCase());
  });

  // Récupérer les ustensiles sélectionnés
  const selectedUstensils = [];
  const selectedUstensilSpans = document.querySelectorAll(".selected-utensil span");
  selectedUstensilSpans.forEach(item => {
      selectedUstensils.push(item.textContent.trim().toLowerCase());
  });

  // Récupérer la liste des recettes
  const recipesListDiv = document.getElementById("recipes-list");
  recipesListDiv.innerHTML = '';

  // Compter le nombre de recettes visibles
  let visibleRecipeCount = 0;

  // Parcourir toutes les recettes
  for (let i = 0; i < recipes.length; i++) {
      const recipeData = recipes[i];
      const recipe = new Recipe(recipeData);
      const recipeCard = new RecipeCard(recipe);
      const card = recipeCard.createRecipeCard();

      // Récupérer les ingrédients de la recette
      const recipeIngredients = Array.from(card.querySelectorAll('.card-ingredients-list-item-name')).map(ingredient => ingredient.textContent.trim().toLowerCase());
      // Récupérer l'appareil de la recette
      const recipeAppliance = recipe._appliance.trim().toLowerCase();
      // Récupérer les ustensiles de la recette
      const recipeUstensils = recipe._ustensils.map(ustensil => ustensil.trim().toLowerCase());

      let isRecipeVisible = true;

      // Vérifier la correspondance des ingrédients sélectionnés
      for (let j = 0; j < selectedIngredients.length; j++) {
          const selectedIngredient = selectedIngredients[j];
          if (!recipeIngredients.includes(selectedIngredient)) {
              isRecipeVisible = false;
              break;
          }
      }

      // Vérifier la correspondance de l'appareil sélectionné
      if (selectedAppliances.length > 0 && !selectedAppliances.includes(recipeAppliance)) {
          isRecipeVisible = false;
      }

      // Vérifier la correspondance des ustensiles sélectionnés
      for (let k = 0; k < selectedUstensils.length; k++) {
          const selectedUstensil = selectedUstensils[k];
          if (!recipeUstensils.includes(selectedUstensil)) {
              isRecipeVisible = false;
              break;
          }
      }

      // Si la recette est visible, l'ajouter à la liste des recettes
      if (isRecipeVisible) {
          visibleRecipeCount++;
          recipesListDiv.appendChild(card);
      }
  }

  // Mettre à jour le compteur de recettes
  app.updateRecipeCount(visibleRecipeCount);
}