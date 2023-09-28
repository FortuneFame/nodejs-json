const validateID = (req, res, next) => {
    if (req.params.id) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }
        req.params.id = id; 
    }
    next();
};
module.exports = validateID;