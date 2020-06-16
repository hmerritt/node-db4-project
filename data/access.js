const knex = require("knex");
const knexfile = require("../knexfile.js");
const db = knex(knexfile["development"]);

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id) {
    return db("ingredients")
        .join(
            "recipes_ingredients",
            "ingredients.id",
            "recipes_ingredients.ingredient_id"
        )
        .and("recipes_ingredients.recipe_id", recipe_id)
        .select("ingredients.name", "recipes_ingredients.quantity")
        .orderBy("quantity");

    // SELECT [ingredients].name as "ingredient", [recipes_ingredients].quantity
    // FROM [ingredients]
    // JOIN [recipes_ingredients]
    // ON [ingredients].id == [recipes_ingredients].ingredient_id
    // AND [recipes_ingredients].recipe_id == 1
    // ORDER BY [ingredients].name ASC;
}

function getInstructions(recipe_id) {
    return db("recipes")
        .join("steps", "steps.recipe_id", "recipes.id")
        .where("recipes.id", recipe_id)
        .select("recipes.name", "steps.instruction")
        .orderBy("steps.order");

    // SELECT [recipes].name, [steps].instruction
    // FROM [recipes]
    // JOIN [steps]
    // ON [steps].recipe_id == [recipes].Id
    // WHERE [recipes].name == "cake"
    // ORDER BY [recipes].name AND [steps]."order" ASC;
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};
