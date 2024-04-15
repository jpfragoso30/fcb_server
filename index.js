//imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./src/Database");
const router = require("./src/Router");

//env
const PORT = process.env.PORT;

//express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//db
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//routes
app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
