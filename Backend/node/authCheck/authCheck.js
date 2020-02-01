const jwt = require('jsonwebtoken');
const tokenSecret = "blogSecret";

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token,tokenSecret);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            serverStat: 5,
            message: 'Auth failed'
        });
    }
};