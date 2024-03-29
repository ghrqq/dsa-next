const express = require("express");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const cors = require("cors");

const mongoose = require("mongoose");
const {
  register,
  login,
  logout,
  updateUser,
} = require("./routes/general/gen_userroutes");
const { getNewAccessToken } = require("./routes/general/gen_tokenroutes");
const {
  getAddresses,
  createNewAddress,
  changeAddress,
  deleteAddress,
} = require("./routes/general/gen_addressroutes");
const {
  getBillings,
  createNewBilling,
  changeBilling,
  deleteBilling,
} = require("./routes/general/gen_billingroutes");
const { getCustomerList } = require("./routes/manager/man_customerroutes");

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Needed to be able to read body data

app.use(express.json()); //to support JSON-encoder bodies

app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Mongo DB is connected.");
});

app.get("/", (req, res) => res.send("Hello Again!"));

// Routes
// // General User - General user routes like login, register, token renewal etc.

app.post("/register", async (req, res) => register(req, res));
app.post("/login", async (req, res) => login(req, res));
app.post("/logout", async (req, res) => logout(req, res));
app.post("/user/updateuser", async (req, res) => updateUser(req, res));

// // Token Routes - Get new access token with refresh token

app.post("/refresh_token", async (req, res) => getNewAccessToken(req, res));

// // User Address Routes
app.post("/user/getaddresses", async (req, res) => getAddresses(req, res));
app.post("/user/createnewaddress", async (req, res) =>
  createNewAddress(req, res)
);
app.post("/user/changeaddress", async (req, res) => changeAddress(req, res));
app.post("/user/deleteaddress", async (req, res) => deleteAddress(req, res));

// // User Billing Info Routes
app.post("/user/getbillinginfo", async (req, res) => getBillings(req, res));
app.post("/user/createnewbilling", async (req, res) =>
  createNewBilling(req, res)
);
app.post("/user/changebilling", async (req, res) => changeBilling(req, res));
app.post("/user/deletebilling", async (req, res) => deleteBilling(req, res));

// // Manager - Customer Routes
app.post("/man/getcustomers", async (req, res) => getCustomerList(req, res));

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
