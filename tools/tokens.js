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

const sendAccessToken = (res, req, accesstoken, user) => {
  res.send({
    accesstoken,
    email: req.body.email,
    user,
  });
};

const sendRefreshToken = (res, refreshtoken) => {
  res.cookie("refreshtoken", refreshtoken, {
    //Change the token name
    httpOnly: true,
    path: "/refresh_token", //Change the path name accordingly
  });
};

const sendTokens = (res, refreshtoken, accesstoken, user) => {
  res
    .cookie("refreshtoken", refreshtoken, {
      //Change the token name
      httpOnly: true,
      path: "/refresh_token", //Change the path name accordingly
    })
    .send({
      accesstoken,
      user,
    });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
  sendTokens,
};
