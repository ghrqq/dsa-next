const User = require("../../schemas/User");
const Address = require("../../schemas/Address");
const Billing = require("../../schemas/Billing");
const { isAuth } = require("../../tools/isAuth");

const createNewAddress = async (req, res) => {
  const { alias, city, name, postcode, address, primary, country } = req.body;
  try {
    const userId = await isAuth(req);


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
      res.status(200).send({ msg: "Address created successfuly.", id: createAddress._id });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAddresses = async (req, res) => {
  try {
    const userId = isAuth(req);

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
    if (primary) {
      const setPrimaries = await Address.updateMany({ user_id: userId }, { primary: false });


    }



    const singleAddress = await Address.updateOne({ user_id: userId, _id: id },
      req.body

    );
    if (!singleAddress) {
      res.status(400).send({ msg: "No address has been found." });
    }

    res.status(200).send({ msg: "Address updated successfuly." });






  } catch (error) {
    console.log(error);
  }
};

const deleteAddress = async (req, res) => {
  const { id } = req.body;
  try {
    const userId = isAuth(req);
    if (userId === null) {
      res.status(400).send({ msg: "You need to login." });
    }
    const del = await Address.deleteOne({ _id: id, user_id: userId });

    if (del) {
      res.status(200).send({ msg: "Address has been deleted succesfuly.", id })
    } else {
      res.stauts(400).send({ msg: "Something went wrong while deleting the address. Refresh the page and try again." })
    }






  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createNewAddress,
  getAddresses,
  changeAddress,
  deleteAddress,
};
