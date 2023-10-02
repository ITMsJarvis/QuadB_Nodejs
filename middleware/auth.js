const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

const authenticateJwt = (req, res, next) => {
    let { token } = req.headers;
    if (token) {
        jwt.verify(token, SECRET, (err, data) => {
            if (err) {
                return res.status(403).json({ message: "Provide the correct token" });
            }
            req.data = data;
            next();
        });
    } else {
        res.json({ message: "Error from Auth / Provide correct token" });
    }
};

module.exports = {
    authenticateJwt,
    SECRET,
};