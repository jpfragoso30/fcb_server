const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkingLot = new Schema({
    lotName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    priceRate: { type: String, required: true },
    paymentTypes: { type: String, required: true },
});

module.exports = mongoose.model("parkingLots", ParkingLot);
