const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkingLot = new Schema({
    lotName: { type: String, required: true },
});

module.exports = mongoose.model("parkingLots", ParkingLot);
