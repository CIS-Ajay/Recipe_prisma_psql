const Category = require('../models/categoryModel');

// Add a new category
const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.addCategory(name);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single category by ID
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.getCategoryById(id);
    res.status(200).json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  getCategoryById,
};
