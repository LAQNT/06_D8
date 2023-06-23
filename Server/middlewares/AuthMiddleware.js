const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.APP_JWT_SECRET_KEY;

// Middlewares

const auth = (req, res, next) => {
  // Verifico la presenza di un token negli headers della request
  let token = req.headers.authorization;
  if (!token) {
    const err = new Error("Unauthorized");
    err.status = 401;
    next(err);
  } else {
    token = token.split(" ")[1];
    jwt.verify(token, jwtSecretKey, (err, data) => {
      if (err) {
        err.message = "Invalid token"; 
        err.status = 401;
        next(err);
      } else {
        console.log(data);
      }
    });
  }

  next();
};

module.exports = auth;
