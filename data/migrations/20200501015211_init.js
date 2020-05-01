
exports.up = function(knex) {
    return (
        knex.schema
            .createTable("recipes", table => {
                table.increments();
                table.text("name").unique().notNullable();
            })
            .createTable("steps", table => {
                table.increments();
                table.integer("recipe_id").unsigned().notNullable()
                    .references("id")
                    .inTable("recipes");
                table.text("instruction").notNullable();
            })
            .createTable("ingredients", table => {
                table.increments();
                table.text("name").unique().notNullable();
            })
            .createTable("recipes_ingredients", table => {
                table.integer("recipe_id").unsigned().notNullable()
                    .references("id")
                    .inTable("recipes");
                table.integer("ingredients").unsigned().notNullable()
                    .references("id")
                    .inTable("recipes");
                table.float("quantity").notNullable();
            });
    )
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipes")
        .dropTableIfExists("steps")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes_ingredients");
};
