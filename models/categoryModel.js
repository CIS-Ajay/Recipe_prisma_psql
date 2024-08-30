// models/categoryModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Category {
  // Add a new category
  static async addCategory(name) {
    return prisma.category.create({
      data: {
        name,
      },
    });
  }

  // Get all categories
  static async getAllCategories() {
    return prisma.category.findMany({
      include: { recipes: true },
    });
  }

  // Get category by ID
  static async getCategoryById(id) {
    return prisma.category.findUnique({
      where: { id: Number(id) },
      include: { recipes: true },
    });
  }
}

module.exports = Category;
