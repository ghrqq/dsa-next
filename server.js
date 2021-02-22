const express = require("express");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const cors = require("cors");

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

const mongoose = require("mongoose");
const { register } = require("./routes/general/gen_userroutes");
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

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
