const User = require("../../schemas/User");
const { hash, compare } = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require("../../tools/tokens");
const { isAuth } = require("../../tools/isAuth");

const getCustomerList = async (req, res) => {
  const { role, reqrole } = req.body;

  try {
    const userId = isAuth(req);
    if (userId === null) {
      res.status(400).send({ msg: "You need to login." });
    }
    const reqUser = await User.findById(userId);
    if (reqUser.role !== "2" && reqUser.role !== "1") {
      // TODO: user role hashs will be updated.
      res.status(404).send("You are not allowed to see this page.");
      return;
    }
    const list = await User.find({ role: role });
    console.log(list, "This is list");
    res
      .status(200)
      .send({ msg: "User list received successfuly.", users: list });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getCustomerList,
};
