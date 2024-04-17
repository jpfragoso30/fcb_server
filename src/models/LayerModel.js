const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Layer = new Schema({
    areaId: { type: String, required: true },
    layer: { type: Number, required: true },
    totalHours: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("layers", Layer);
