exports.up = function (knex) {
    return knex.schema
        .createTable("recipes", (table) => {
            table.increments();
            table.text("name").unique().notNullable();
        })
        .createTable("steps", (table) => {
            table.increments();
            table
                .integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("recipes.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("order").notNullable();
            table.text("instruction").notNullable();
        })
        .createTable("ingredients", (table) => {
            table.increments();
            table.text("name").unique().notNullable();
        })
        .createTable("recipes_ingredients", (table) => {
            table
                .integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("recipes.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table
                .integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("ingredients.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.float("quantity").notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("recipes")
        .dropTableIfExists("steps")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes_ingredients");
};
