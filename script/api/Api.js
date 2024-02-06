class Api {
	/**
   *
   * @param {string} url
   */
	constructor(url) {
		this._url = url;
	}

	async getRecipeJSON() {
	}
}

class RecipesApi extends Api {
	/**
   *
   * @param {string} url
   */
	constructor(url) {
		super(url);
	}

	async getRecipe() {
	}
}