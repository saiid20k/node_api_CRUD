// Get All Categories
module.exports.getCategories = (req, res) => {
    res.status(200).send("Get Categories Controller Works.")
}

// Add Category
module.exports.addCategory = (req, res) => {
    res.status(200).send("Add Category Route Works.")
}

// Edit Category
module.exports.editCategory = (req, res) => {
    res.status(201).send("Edit Category Route Works.")
}

// Delete Category
module.exports.deleteCategory = (req, res) => {
    res.status(200).send("Delete Category Route Works")
}

// View Category
module.exports.view = (req, res) => {
    res.status(201).send("View Product Route Works,")
}