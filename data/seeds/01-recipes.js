exports.seed = function (knex) {
    return knex("recipes").insert([
        { id: 1, name: "cake" },
        { id: 2, name: "oat biscuits" },
        { id: 3, name: "lasagna" },
    ]);
};
