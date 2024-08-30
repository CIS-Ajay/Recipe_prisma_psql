const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Route to add a new category
router.post('/categories', categoryController.addCategory);

// Route to get all categories
router.get('/categories', categoryController.getAllCategories);

// Route to get a single category by ID
router.get('/categories/:id', categoryController.getCategoryById);

module.exports = router;
