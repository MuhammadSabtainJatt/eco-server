// routes/product.js
const express = require('express');
const router = express.Router();
const Product = require('../Models/ProductModel');

// Route to get all products
router.get('/getproducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new product
router.post('/postproduct', async (req, res) => {
  const product = new Product({
    image: req.body.image,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get a specific product by ID
router.get('/getproduct/:id', getProduct, (req, res) => {
  res.json(res.product);
});

// Middleware to get product by ID
async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

// Route to update a product by ID
router.patch('/updateproduct/:id', getProduct, async (req, res) => {
  if (req.body.image != null) {
    res.product.image = req.body.image;
  }
  if (req.body.title != null) {
    res.product.title = req.body.title;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  if (req.body.description != null) {
    res.product.description = req.body.description;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a product by ID
router.delete('/delproduct/:id', getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
