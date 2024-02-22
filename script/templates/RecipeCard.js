class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe;
    }

    createRecipeCard() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("col");
        $wrapper.setAttribute("id", `${this._recipe._id}`);

		const cardIngredients = this._recipe._ingredients.map(ingredient => {
			const ingredientName = ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.slice(1);
			const ingredientQuantity = ingredient.quantity ? ` ${ingredient.quantity}` : "";
			const ingredientUnit = ingredient.unit ? ` ${ingredient.unit}` : "";
			
			return `
				<li class="card-ingredients-list-item recipe-card">
					<span class="card-ingredients-list-item-name">${ingredientName}</span>
					<br>
					<span class="card-ingredients-list-item-quantity">${ingredientQuantity} ${ingredientUnit}</span>
				</li>
			`;
		}).join('');
		
        const imageURL = `./assets/img/plats/${this._recipe._image}`; 

        const recipeCard = `
		<div class="card mt-5">
        	<img class="recipe_img" src="${imageURL}" class="card-img-top" alt="${this._recipe._name}">
        	<div class="card-body">
            	<div class="row mb-2">
                	<h2 class="card-title col-8 card-name">${this._recipe._name}</h2>
                	<div class="card-title col-4 text-end card-time-container">
                    	<img class="me-1 card-time-watch" alt="" src="./assets/img/watch-time.svg">
                    	<span class="card-time">${this._recipe._time} min</span>
                	</div>
            	</div>
            	<div class="row">
                	<div class="col-12">
                    	<p>RECETTE</p>
                    	<p class="card-text col-12 card-description">${this._recipe._description.replace(/(.{185})..+/, "$1…")}</p>
                	</div>
            	</div>
            	<div class="row mt-2">
                	<div class="col-md-12">
                    	<p>INGRÉDIENTS</p>
                    	<ul class="list-unstyled card-ingredients-list">${cardIngredients}</ul>
                	</div>
            	</div>
        	</div>
    	</div>
        `;

        $wrapper.innerHTML = recipeCard;
        return $wrapper;
    }
}
