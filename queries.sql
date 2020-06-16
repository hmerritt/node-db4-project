-- Self practice SQL queries

-- Gets recipe and instruction
SELECT [recipes].name, [steps].instruction
FROM [recipes]
JOIN [steps]
ON [steps].recipe_id == [recipes].Id
ORDER BY [recipes].name AND [steps]."order" ASC;

-- Get recipe name, ingredient name and quantity
SELECT [recipes].name, [ingredients].name as "ingredient", [recipes_ingredients].quantity
FROM [ingredients]
JOIN [recipes_ingredients]
ON [ingredients].id == [recipes_ingredients].ingredient_id
JOIN [recipes]
ON [recipes].id == [recipes_ingredients].recipe_id
ORDER BY [ingredients].name ASC;

-- List of all ingredients and quantities for a given recipe
SELECT [ingredients].name as "ingredient", [recipes_ingredients].quantity
FROM [ingredients]
JOIN [recipes_ingredients]
ON [ingredients].id == [recipes_ingredients].ingredient_id
AND [recipes_ingredients].recipe_id == 1
ORDER BY [ingredients].name ASC;
