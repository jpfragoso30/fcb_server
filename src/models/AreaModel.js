const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Area = new Schema({
    lotId: { type: String, required: true },
    areaName: { type: String, required: true },
    totalHours: { type: Number, required: true, default: 0 },
    imageUrl: { type: String, required: true },
    nOccupied: { type: Number, required: true, default: 0 },
    nAvailable: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("areas", Area);
