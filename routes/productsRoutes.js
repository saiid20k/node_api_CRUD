const router = require('express').Router();
const productsController = require('../controller/productsController')

// Get All Products ==== Old Syntex
// router.get("/", (req, res) => {
//     res.status(200).send("All Products Route Works Successfuly.")
// });

// Get All Products ==== New Syntex
router.get("/", productsController.getAllProducts);

// Add Product Route ==== Old Syntex
// router.post("/add", (req, res) => {
//     res.status(201).send("Add Product Route Work Successfuly.")
// })

// Add Product Route ==== New Stntex
router.post("/add", productsController.addProduct)

// Edit Product ==== Old Syntex
// router.put("/edit/:id", (req, res) => {
//     res.status(201).send("Edit Product Works Successfuly.")
// })

// Edit Product ==== New Syntex
router.put("/:id/edit", productsController.editProduct)

// Delete Product ==== Old Syntex
// router.delete("/delete/:id", (req, res) => {
//     res.status(200).send("Delete Product Works Successfuly.")
// })

// Delete Product ==== New Syntex
router.delete("/:id/delete", productsController.deleteProduct)

// View one Product Old Syntex
// router.get("/view/:id", (req, res) => {
//     res.status(201).send("Get Product Route Works Successfuly.")
// })

// View one Product New Syntex
router.get("/:id/view", productsController.getProduct)







module.exports = router;