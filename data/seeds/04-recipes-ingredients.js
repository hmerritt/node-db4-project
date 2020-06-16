exports.seed = function (knex) {
    return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 12 },
        { recipe_id: 1, ingredient_id: 2, quantity: 4 },
        { recipe_id: 1, ingredient_id: 7, quantity: 2 },

        { recipe_id: 2, ingredient_id: 5, quantity: 55 },
        { recipe_id: 2, ingredient_id: 2, quantity: 8 },
        { recipe_id: 2, ingredient_id: 7, quantity: 3 },

        { recipe_id: 3, ingredient_id: 4, quantity: 42 },
        { recipe_id: 3, ingredient_id: 3, quantity: 23 },
        { recipe_id: 3, ingredient_id: 6, quantity: 6 },
    ]);
};
