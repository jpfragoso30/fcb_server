const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Area = new Schema({
    lotId: { type: String, required: true },
    areaName: { type: String, required: true },
});

module.exports = mongoose.model("areas", Area);
