// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const upload = require('../middlewares/upload');


// Route to add a new recipe with an image, ingredients, and category
router.post('/recipes', upload.single('image'), recipeController.addRecipe);

// Route to get all recipes
router.get('/recipes', recipeController.getAllRecipes);

// Route to get a single recipe by ID
router.get('/recipes/:id', recipeController.getRecipeById);

// Route to update a recipe with an image
router.put('/recipes/:id', upload.single('image'), recipeController.updateRecipe);

// Route to delete a recipe
router.delete('/recipes/:id', recipeController.deleteRecipe);

module.exports = router;
