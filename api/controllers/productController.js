const products = require('../products')();

exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
};

exports.getProductById = (req, res) => {
    const productId = Number(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
};

exports.addProduct = (req, res) => {
    const {
        title = "there is no data",
        price = "there is no data",
        description = "there is no data",
        category = "there is no data",
        image = "there is no data",
        rating = { rate: "there is no data", count: "there is no data" }
    } = req.body;

    const product = {
        id: products.length + 1,
        title,
        price,
        description,
        category,
        image,
        rating
    };

    products.push(product);
    res.status(201).json(product);
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const existingProduct = products.find(product => product.id === parseInt(id));

    if (!existingProduct) {
        return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = {
        ...existingProduct,
        ...req.body
    };

    const index = products.indexOf(existingProduct);
    products[index] = updatedProduct;

    res.json(updatedProduct);
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    const index = products.indexOf(product);
    products.splice(index, 1);

    res.json({ message: "Product deleted successfully" });
};
