const router = require('express').Router();
const categoriesController = require('../controller/categoriesController')

// Get All Categories
router.get("/", categoriesController.getCategories);

// Add Categpry Route
router.post("/add", categoriesController.addCategory)

// Edit Categpry
router.put("/edit/:id", categoriesController.editCategory)

// Delete Categpry
router.delete("/delete/:id", categoriesController.deleteCategory)

// View one Categpry
router.get("/view/:id", categoriesController.view)



module.exports = router;