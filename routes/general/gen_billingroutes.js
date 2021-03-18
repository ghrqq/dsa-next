const Billing = require("../../schemas/Billing");

const { isAuth } = require("../../tools/isAuth");


const createNewBilling = async (req, res) => {
    const { alias, city, name, postcode, address, primary, country, taxnr } = req.body;
    try {
        const userId = await isAuth(req);


        if (userId === null) {
            res.status(400).send({ msg: "You need to login." });

        }
        if (primary === true) {
            const setPrimaries = await Billing.updateMany({ user_id: userId }, { primary: false });


        }


        const newBilling = new Billing({
            alias,
            city,
            name,
            postcode,
            address,
            primary,
            country,
            taxnr,
            user_id: userId,
        });

        const createBilling = await newBilling.save();

        if (createBilling) {
            res.status(200).send({ msg: "Billing created successfuly.", id: createBilling._id });
        }
    } catch (error) {
        console.log(error);
    }
};

const getBillings = async (req, res) => {
    try {
        const userId = isAuth(req);

        if (userId === null) {
            res.status(400).send({ msg: "You need to login." });
        }

        const list = await Billing.find({ user_id: userId });
        res.status(200).send(list)
    } catch (error) {
        console.log(error);
    }
};

const changeBilling = async (req, res) => {
    const {
        alias,
        city,
        name,
        postcode,
        address,
        primary,
        id,
        country,
        taxnr
    } = req.body;

    try {
        const userId = isAuth(req);
        if (userId === null) {
            res.status(400).send({ msg: "You need to login." });
        }
        if (primary === true) {
            const setPrimaries = await Billing.updateMany({ user_id: userId }, { primary: false });


        }



        const singleBilling = await Billing.updateOne({ user_id: userId, _id: id },
            req.body

        );
        if (!singleBilling) {
            res.status(400).send({ msg: "No billing info has been found." });
        }

        res.status(200).send({ msg: "Billing Info is successfuly updated." });






    } catch (error) {
        console.log(error);
    }
};

const deleteBilling = async (req, res) => {
    const { id } = req.body;
    try {
        const userId = isAuth(req);
        if (userId === null) {
            res.status(400).send({ msg: "You need to login." });
        }
        const del = await Billing.deleteOne({ _id: id, user_id: userId });

        if (del) {
            res.status(200).send({ msg: "Billing Info has been deleted succesfuly.", id })
        } else {
            res.stauts(400).send({ msg: "Something went wrong while deleting the Billing Info. Refresh the page and try again." })
        }






    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createNewBilling,
    getBillings,
    changeBilling,
    deleteBilling,
};