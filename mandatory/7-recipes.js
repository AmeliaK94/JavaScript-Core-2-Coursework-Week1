/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- title (a string), 
- servings (a number), and 
- ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = {
    recipe1: {
        title: "Bread with butter",
        servings: 2,
        ingredients: ["Bread", "Butter"],
    },

    recipe2: {
        title: "Pierogi",
        servings: 4,
        ingredients: ["Flour", "Water", "Egg", "Quark cheese", "Onion", "Potatoes", "Salt"]
    },

    recipe3: {
        title: "Tomatoe salad",
        servings: 1,
        ingredients: ["Tomatoes", "Olive oil", "Salt"]
    },

    recipe4: {
        title: "Chicken Domoda",
        servings: 4,
        ingredients: ["Chicken thighs", "Tomatoe puree", "Onions", "Water", "3 Scotch bonnet chillies", "Chilli pepper powder", "Salt"]
    },

    recipe5: {
        title : "Rosół",
        servings: 4,
        ingredients: ["Water", "Chicken on the bone", "Carrots", "Celeriac", "Parsley root", "Pepper corns", "Salt", "Thinly sliced egg pasta"]
    }
}

function recipeCard (recipe) {
    console.log(recipe.title);
    console.log("Serves: " + recipe.servings);
    console.log("Ingredients:")
    recipe.ingredients.forEach(ingredient =>
        console.log(ingredient)
        )
    console.log("")
}

recipeCard(recipes.recipe1)
recipeCard(recipes.recipe2)
recipeCard(recipes.recipe3)
recipeCard(recipes.recipe4)
recipeCard(recipes.recipe5)