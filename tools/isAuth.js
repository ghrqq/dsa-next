const { verify } = require("jsonwebtoken");

const isAuth = (req) => {
  const authorization = req.headers["authorization"];
  console.log(authorization);
  if (!authorization) throw new Error("You need to login");
  // 'Bearer actualtoken'
  const token = authorization.split(" ")[1];
  console.log("token: ", token);
  const { user_id } = verify(token, process.env.ACCESS_TOKEN_SECRET);
  return user_id;
};

module.exports = {
  isAuth,
};
