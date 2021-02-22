const express = require("express");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// 1. Register a user
// 2. Login a user
// 3. Logout a user
// 4. Setup a protected route
// 5. Get a new accesstoken with a refresh token

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

app.get("/", (req, res) => res.send("Hello Again!"));

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
