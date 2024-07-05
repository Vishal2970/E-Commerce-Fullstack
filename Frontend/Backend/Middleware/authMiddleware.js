const JWT = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET_KEY)
        req.user=decode;
        next();
    } catch (error) {
        console.log(error);
    }
}
module.exports=authMiddleware;