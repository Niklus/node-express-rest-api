const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT || 3000;

const postsRoute = require("./routes/posts");
const homeRoute = require("./routes/home");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", homeRoute);
app.use("/posts", postsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB")
);

// Listening to server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
