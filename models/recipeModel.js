// models/recipeModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Recipe {

  static async addRecipe(title, ingredients, categoryId, imageBuffer) {
    return prisma.recipe.create({
      data: {
        title,
        categoryId,
        image: imageBuffer,
        ingredients: {
          create: ingredients.map((ingredient) => ({ name: ingredient })),
        },
      },
      include: { ingredients: true, category: true },
    });
  }

  // List all recipes
  static async getAllRecipes() {
    return prisma.recipe.findMany({
      include: { ingredients: true, category: true },
    });
  }

  // Get a single recipe by ID
  static async getRecipeById(id) {
    return prisma.recipe.findUnique({
      where: { id: Number(id) },
      include: { ingredients: true, category: true },
    });
  }

  // Update a recipe
  static async updateRecipe(id, updatedData) {
    return prisma.recipe.update({
      where: { id: Number(id) },
      data: updatedData,
      include: { ingredients: true, category: true },
    });
  }

  // Delete a recipe
  static async deleteRecipe(id) {
    return prisma.recipe.delete({
      where: { id: Number(id) },
    });
  }

}

module.exports = Recipe;
