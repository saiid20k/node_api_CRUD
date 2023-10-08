const { json } = require('express');
const pool = require('../utiil/mysql');

// Get All Products
module.exports.getAllProducts = (req, res) => {
    pool.query("SELECT * FROM products", (error, results, fields) => {
        if(error){
            res.status(500).send("Internal Server Error!.")
        } else {
            res.json(results).status(200)
        }
    })
}

// Add Product Controller
module.exports.addProduct = (req, res) => {
    const producInfo = req.body;
    pool.query("INSERT INTO products SET ?", [producInfo], (error, results) =>{
        if(error) {
            res.status(500).send("Internal Server Error", error)
        } else {
            res.status(201).send("Product Added Succesful.")
        }
    })
}

// Edit Product Module
module.exports.editProduct = (req, res) => {
    const product_id = req.params.id;
    const producInfo = req.body;
    pool.query("UPDATE products SET ? WHERE id = ? ", [producInfo, product_id], (error, results) =>{
        if(error) {
            res.status(500).send("Internal Server Error", error)
        } else {
            res.status(201).send("Product Edit Succesful.")
        }
    });
}

// Delete Product Controller
module.exports.deleteProduct = (req, res) => {
    const p_id = req.params.id;
    pool.query("DELETE FROM products WHERE id = ?", [p_id], (error, results) => {
        if(error) {
            res.status(500).send(error)
        } else {
            res.status(201).send("Succesful Delete Product.")
        }
    })
}

// View Product
module.exports.getProduct = (req, res) => {
    const id = req.params.id;
    pool.query("SELECT * FROM products WHERE id = ?", [id], (error, results) => {
        if(error){
            res.status(500).send(error)
        } else {
            res.status(200).json(results)
        }
    })
}