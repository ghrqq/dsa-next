const { sign } = require("jsonwebtoken");

const createAccessToken = (user_id) => {
  return sign(
    {
      user_id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );
};
const createRefreshToken = (user_id) => {
  return sign(
    {
      user_id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

const sendAccessToken = (res, req, accesstoken) => {
  res.send({
    accesstoken,
    email: req.body.email,
  });
};

const sendRefreshToken = (res, refreshtoken) => {
  res.cookie("refreshtoken", refreshtoken, {
    //Change the token name
    httpOnly: true,
    path: "/refresh_token", //Change the path name accordingly
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
};
