const jwt = require("jsonwebtoken");

//users wants to like a post
//clicks the like button => authmiddleware (next) => like controller

const auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      //when a request passes through this middleware, this populates the req object with the userId property and we can access that property on the next router handler
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
