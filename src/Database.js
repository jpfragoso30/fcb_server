const { ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

const URI = process.env.URI;
const ENV = process.env.NODE_ENV;

const { CERT_FILE } = require(__dirname + "/../config/config.json")[ENV];

mongoose
    .connect(URI, {
        tlsCertificateKeyFile: CERT_FILE,
        serverApi: ServerApiVersion.v1,
    })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;

module.exports = db;
