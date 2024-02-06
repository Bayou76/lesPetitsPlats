class Recipe {
	constructor(recipe) {
		this._id = recipe.id;
		this._image = recipe.image;
		this._name = recipe.name;
		this._servings = recipe.servings;
		this._ingredients = recipe.ingredients;
		this._time = recipe.time;
		this._description = recipe.description;
		this._appliance = recipe.appliance;
		this._ustensils = recipe.ustensils;
	}
}
