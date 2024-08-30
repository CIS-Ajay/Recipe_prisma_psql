// controllers/recipeController.js
const Recipe = require('../models/recipeModel');

// // Add a new recipe with an image
// const addRecipe = async (req, res) => {
//   try {
//     const { title, ingredients, type } = req.body;
//     const image = req.file ? req.file.path : null;
//     const newRecipe = await Recipe.addRecipe(title, ingredients, type, image);
//     res.status(201).json(newRecipe);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // List all recipes
// const getAllRecipes = async (req, res) => {
//   try {
//     const recipes = await Recipe.getAllRecipes();
//     res.status(200).json(recipes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Update a recipe with an image
// const updateRecipe = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = {
//       ...req.body,
//       image: req.file ? req.file.path : undefined,
//     };

//     const updatedRecipe = await Recipe.updateRecipe(id, updatedData);
//     res.status(200).json(updatedRecipe);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Delete a recipe
// const deleteRecipe = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Recipe.deleteRecipe(id);
//     res.status(204).send(); // No Content
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


// Add a new recipe with an image, ingredients, and category
const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, categoryId } = req.body;
    const image = req.file ? req.file.path : null;

    const newRecipe = await Recipe.addRecipe(title, ingredients, categoryId, image);
    res.status(201).json(newRecipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// List all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.getAllRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.getRecipeById(id);
    res.status(200).json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = {
      ...req.body,
      image: req.file ? req.file.buffer : undefined,
    };

    const updatedRecipe = await Recipe.updateRecipe(id, updatedData);
    res.status(200).json(updatedRecipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    await Recipe.deleteRecipe(id);
    res.status(204).send(); // No Content
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addRecipe,
  getAllRecipes,
  updateRecipe,
  deleteRecipe,
  getRecipeById,
};
