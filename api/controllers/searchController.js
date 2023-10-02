const products = require('../products')();

exports.searchProducts = (req, res) => {
    const { title, price } = req.query;

    if (!title && price === undefined) {
        return res.status(404).json({ error: "Provide title or price for search." });
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
        return res.status(404).json({ error: "No products found matching the specified price." });
    };

    if (title && !filteredProducts.length) {
        return res.status(404).json({ error: "No products found matching the specified title." });
    };

    res.json(filteredProducts);
};