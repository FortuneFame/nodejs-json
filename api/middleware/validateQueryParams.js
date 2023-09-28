const validateQueryParams = (req, res, next) => {
    if (req.query.price) {
        const price = parseInt(req.query.price, 10);
        if (isNaN(price)) {
            return res.status(400).json({ error: 'Invalid price' });
        };
        req.query.price = price;
    }
    next();
};

module.exports = validateQueryParams;