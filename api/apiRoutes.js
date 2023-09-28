const products = require('./products');
const validateID = require('./middleware/validateID')
const validateQueryParams = require('./middleware/validateQueryParams');

const apiRoutes = (app) => {

    app.get('/api/products', (req, res) => {
        res.status(200).send(products);
    });

    app.get('/api/products/:id', validateID, (req, res) => {
        const product = products.find(p => p.id === req.params.id);
        if (!product) {
            return res.status(404).send({ error: "Product not found" });
        };
        res.status(200).send(product);
    });

    app.get('/api/search', validateQueryParams, (req, res) => {
        const { title, price } = req.query;

        if (!title && price === undefined) {
            return res.status(404).send({ error: "Provide title or price for search." });
        };

        const titleWords = title ? title.toLowerCase().split(' ') : [];
        const filteredProducts = products.filter(product => {
            const titleMatch = titleWords.every(word => product.title.toLowerCase().includes(word));

            if (title && price !== undefined) {
                return titleMatch && product.price <= price;
            } else if (title) {
                return titleMatch;
            } else if (price !== undefined) {
                return product.price <= price;
            }
            return true;
        });

        if (price !== undefined && !filteredProducts.length) {
            return res.status(404).send({ error: "No products found matching the specified price." });
        };

        if (title && !filteredProducts.length) {
            return res.status(404).send({ error: "No products found matching the specified title." });
        }

        res.send(filteredProducts);
    });
};

module.exports = apiRoutes;
