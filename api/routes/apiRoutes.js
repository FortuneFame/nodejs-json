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
apiRouter.get('/products', productsController.getAllProducts);
apiRouter.get('/products/:id', productsController.getProductById);
apiRouter.get('/search', searchController.searchProducts);

// POST
apiRouter.post('/products', productsController.addProduct);

// PUT
apiRouter.put('/products/:id', productsController.updateProduct);

// DELETE
apiRouter.delete('/products/:id', productsController.deleteProduct);

module.exports = apiRouter;