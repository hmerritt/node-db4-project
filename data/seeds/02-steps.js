exports.seed = function (knex) {
    return knex("steps").insert([
        {
            id: 1,
            recipe_id: 1,
            order: 1,
            instruction: "Heat the oven to 180c/fan 160c/gas 4",
        },
        {
            id: 2,
            recipe_id: 1,
            order: 2,
            instruction:
                "Beat all the cake ingredients together in a large bowl",
        },
        {
            id: 3,
            recipe_id: 1,
            order: 3,
            instruction:
                "Bake side by side for 20-25 minutes until the sponges are risen",
        },

        {
            id: 4,
            recipe_id: 2,
            order: 1,
            instruction: "Gather ingredients",
        },
        {
            id: 5,
            recipe_id: 2,
            order: 2,
            instruction: "Make oat biscuits",
        },

        {
            id: 6,
            recipe_id: 3,
            order: 1,
            instruction: "Start by making the sauce",
        },
        {
            id: 7,
            recipe_id: 3,
            order: 2,
            instruction:
                "Let this simmer while you boil the noodles and get the cheeses ready",
        },
        {
            id: 8,
            recipe_id: 3,
            order: 3,
            instruction: "Bake until bubbly and you’re ready to eat!",
        },
    ]);
};
