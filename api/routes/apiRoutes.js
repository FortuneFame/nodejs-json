const express = require('express');
const apiRouter = express.Router();

const validateID = require('../middleware/validateID');
const validateQueryParams = require('../middleware/validateQueryParams');

const productsController = require('../controllers/productController');
const searchController = require('../controllers/searchController');

// Middlewares used
apiRouter.use('/products/:id', validateID);
apiRouter.use('/search', validateQueryParams);

// GET

/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns all products
 *     responses:
 *       200:
 *         description: An array of all products
 */
apiRouter.get('/products', productsController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns a product by ID
 *     parameters:
 *       - name: id
 *         description: Product's ID
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A product object
 *       404:
 *         description: Product not found
 */
apiRouter.get('/products/:id', productsController.getProductById);

/**
 * @swagger
 * /search:
 *   get:
 *     tags:
 *       - Products
 *     description: Searches products by title or price
 *     parameters:
 *       - in: query
 *         name: title
 *         description: Product title
 *         type: string
 *       - in: query
 *         name: price
 *         description: Product price
 *         type: integer
 *     responses:
 *       200:
 *         description: An array of matched products
 *       404:
 *         description: No products found
 */
apiRouter.get('/search', searchController.searchProducts);

// POST

/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     description: Adds a new product
 *     requestBody:
 *       description: The product to add
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               # ... (other properties)
 *     responses:
 *       201:
 *         description: The created product
 */
apiRouter.post('/products', productsController.addProduct);

// PUT

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     tags:
 *       - Products
 *     description: Updates a product by ID
 *     parameters:
 *       - name: id
 *         description: Product's ID
 *         in: path
 *         required: true
 *         type: integer
 *     requestBody:
 *       description: New product data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               # ... (other properties)
 *     responses:
 *       200:
 *         description: The updated product
 *       404:
 *         description: Product not found
 */
apiRouter.put('/products/:id', productsController.updateProduct);

// DELETE

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     description: Deletes a product by ID
 *     parameters:
 *       - name: id
 *         description: Product's ID
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted message
 *       404:
 *         description: Product not found
 */
apiRouter.delete('/products/:id', productsController.deleteProduct);

module.exports = apiRouter;
