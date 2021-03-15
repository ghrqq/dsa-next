const User = require("../../schemas/User");
const Address = require("../../schemas/Address");
const Billing = require("../../schemas/Billing");
const { isAuth } = require("../../tools/isAuth");

const createNewAddress = async (req, res) => {
  const { alias, city, name, postcode, address, primary, country } = req.body;
  try {
    const userId = await isAuth(req);
    console.log("ID: ", userId)
    if (userId === null) {
      res.status(400).send({ msg: "You need to login." });

    }

    const newAddress = new Address({
      alias,
      city,
      name,
      postcode,
      address,
      primary,
      country,
      user_id: userId,
    });

    const createAddress = await newAddress.save();
    if (createAddress) {
      res.status(200).send({ msg: "Address created successfuly." });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAddresses = async (req, res) => {
  try {
    const userId = isAuth(req);
    console.log("Shit id: ", userId)
    if (userId === null) {
      res.status(400).send({ msg: "You need to login." });
    }

    const list = await Address.find({ user_id: userId });
    res.status(200).send(list)
  } catch (error) {
    console.log(error);
  }
};

const changeAddress = async (req, res) => {
  const {
    alias,
    city,
    name,
    postcode,
    address,
    primary,
    id,
    country,
  } = req.body;

  try {
    const userId = isAuth(req);
    if (userId === null) {
      res.status(400).send({ msg: "You need to login." });
    }

    const singleAddress = await Address.find({ user_id: userId, _id: id });
    if (!singleAddress) {
      res.status(400).send({ msg: "No address has been found." });
    }

    const keys = Object.keys(req.body);

    const updated = keys.map((item) => (singleAddress[item] = req.body[item]));

    console.log(updated);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNewAddress,
  getAddresses,
  changeAddress,
};
