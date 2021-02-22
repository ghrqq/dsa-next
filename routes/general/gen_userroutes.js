const User = require("../../schemas/User");

const register = async (req, res) => {
  const { name, surname, email, lang, currency } = req.body;
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

    const createUser = await newUser.save();

    if (createUser) {
      res.status(200).send({
        msg: `Dear ${createUser.name}, you have been registered successfuly. Please login.`,
      });
    } else {
      res.status(200).send({ msg: "Something went wrong." });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  register,
};
