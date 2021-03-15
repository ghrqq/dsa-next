const User = require("../../schemas/User");
const { hash, compare } = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require("../../tools/tokens");

const register = async (req, res) => {
  const { name, surname, email, lang, currency, password } = req.body;
  try {
    const mail = await User.findOne({ email });
    if (mail) {
      res.status(400).send({ msg: "Mail is already registered." });
    }

    const newUser = new User({
      name,
      surname,
      email,
      lang,
      currency,
      password,
    });

    const hashedPass = await hash(password, 10);

    newUser.password = hashedPass;

    const createUser = await newUser.save();

    if (createUser) {
      res.status(200).send({
        msg: `Dear ${createUser.name}, you have been registered successfuly. Please login. Password is: ${createUser.password}`,
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

// Login

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).send({ msg: "User not found." });
    }
    const valid = await compare(password, user.password);
    if (valid === true) {
      //  Create a refresh and accesstoken
      const accesstoken = createAccessToken(user._id);
      const refreshtoken = createRefreshToken(user._id);
      // Versions of tokens???

      // 4. Put the refreshtoken in the DB;
      user.token = refreshtoken;

      const updatedUser = await user.save();
      user.password = true;
      // 5. Send tokens. Refresh token as a cookie and accesstoken as a regular response
      sendRefreshToken(res, refreshtoken);
      sendAccessToken(res, req, accesstoken, user);
      console.log("acccess token: ", accesstoken);

      //   res.status(200).send({ msg: `Welcome back, ${user.name}!` });
    } else {
      res.status(400).send({ msg: "Wrong password." });
    }
  } catch (error) {
    console.log(error.message, "catched");
  }
};

const logout = async (req, res) => {
  res.clearCookie("refreshtoken", { path: "/refresh_token" }); // Change the token name accordingly
  return res.status(200).send({
    message: "Logged out",
  });
};

module.exports = {
  register,
  login,
  logout,
};
