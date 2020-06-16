exports.seed = function (knex) {
    return knex("ingredients").insert([
        { id: 1, name: "flower" },
        { id: 2, name: "butter" },
        { id: 3, name: "lasagna" },
        { id: 4, name: "beef" },
        { id: 5, name: "oats" },
        { id: 6, name: "cheese" },
        { id: 7, name: "sugar" },
    ]);
};
