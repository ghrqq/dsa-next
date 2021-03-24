const { verify } = require("jsonwebtoken");

const isAuth = (req) => {
  const authorization = req.headers["authorization"];
  console.log(authorization);
  // 'Bearer actualtoken'
  const token = authorization.split(" ")[1];
  if (token == undefined) throw new Error("You need to login");
  console.log("token: ", token);

  try {
    const { user_id } = verify(token, process.env.ACCESS_TOKEN_SECRET);

    console.log("User ID: ", user_id)
    return user_id;


  } catch (error) {
    console.log(error.message)
  }

};

module.exports = {
  isAuth,
};
