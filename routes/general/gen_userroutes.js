const User = require("../../schemas/User");
const Login = require("../../schemas/Login");
const { hash, compare } = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require("../../tools/tokens");
const { isAuth } = require("../../tools/isAuth");

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
    });

    const hashedPass = await hash(password, 10);

    // newUser.password = hashedPass;

    const createUser = await newUser.save();

    const newLogin = new Login({
      user_id: createUser._id,
      password: hashedPass,
      email: createUser.email,
    });

    const saveLogin = await newLogin.save();

    if (createUser && saveLogin) {
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
    const loginDetails = await Login.findOne({ email });

    if (!loginDetails) {
      res.status(400).send({ msg: "User not found." });
    }
    const valid = await compare(password, loginDetails.password);
    if (valid === true) {
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).send({ msg: "User not found." });
      }

      //  Create a refresh and accesstoken
      const accesstoken = createAccessToken(user._id);
      const refreshtoken = createRefreshToken(user._id);
      // Versions of tokens???

      // 4. Put the refreshtoken in the DB;
      user.token = refreshtoken;

      const updatedUser = await user.save();
      // user.password = true;
      user.token = accesstoken;
      // 5. Send tokens. Refresh token as a cookie and accesstoken as a regular response
      sendRefreshToken(res, refreshtoken);
      sendAccessToken(res, req, accesstoken, user);
      // console.log("acccess token: ", accesstoken);

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

const updateUser = async (req, res) => {
  const {
    name,
    surname,
    password,
    email,
    lang,
    currency,
    isMailsAllowed,
  } = req.body;
  try {
    const userId = isAuth(req);
    if (userId === null) {
      res.status(400).send({ msg: "You need to login." });
    }
    if (isMailsAllowed === true) {
      // TODO: Mail list add.
    }
    if (password) {
      const hashedPass = await hash(password, 10);
      const login = await Login.updateOne(
        { user_id: userId },
        { password: hashedPass }
      );
      console.log(login, "login update");
    }

    delete req.body.isMailsAllowed;

    const singleUser = await User.updateOne({ _id: userId }, req.body);
    const user = await User.findById(userId);
    const accesstoken = createAccessToken(user._id);
    user.token = accesstoken;
    // user.password = true;

    if (singleUser) {
      res.status(200).send({ msg: "User updated succesfuly.", user });
    }
  } catch (error) {
    console.log(error.msg);
  }
};

module.exports = {
  register,
  login,
  logout,
  updateUser,
};
