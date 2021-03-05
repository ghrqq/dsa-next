const User = require("../../schemas/User");
const { verify } = require("jsonwebtoken");
const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
  sendTokens,
} = require("../../tools/tokens");

const getNewAccessToken = async (req, res) => {
  const token = req.cookies.refreshtoken;
  if (!token)
    return res.status(400).send({
      accesstoken: "",
    });

  try {
    const payload = await verify(token, process.env.REFRESH_TOKEN_SECRET);
    if (!payload) {
      res
        .status(400)
        .send({ msg: "You need to login again.", accesstoken: "" });
    }

    const user = await User.findById(payload.user_id);
    if (!user) {
      res.status(400).send({ msg: "User not found.", accesstoken: "" });
    }

    if (user.token !== token) {
      console.log("Not equal: ", token, user.token);
      res.status(400).send({ accesstoken: "", msg: "Shit happens" });
      return;
    }

    const accesstoken = createAccessToken(user._id);
    const refreshtoken = createRefreshToken(user._id);
    user.token = refreshtoken;

    const update = await user.save();

    if (!update) {
      res.status(400).send({ msg: "An error occured." });
    }

    // If everything ok, send new refreshtoken and accesstoken
    return sendTokens(res, refreshtoken, accesstoken);
  } catch (error) {
    res
      .status(400)
      .send({ msg: `An error occured: ${error.message}`, accesstoken: "" });
  }
};

module.exports = {
  getNewAccessToken,
};
