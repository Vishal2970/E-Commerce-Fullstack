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



//   const token = req.header('Authorization')?.split(' ')[1]; // Assuming the token is sent in the Authorization header

//   if (!token) {
//     return res.status(401).json({ message: 'Access Denied. No token provided.' });
//   }

//   try {
//     const verified = JWT.verify(token, process.env.JWT_SECRET); // Replace with your actual secret
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid Token.' });
//   }
// };

// module.exports = authMiddleware;
