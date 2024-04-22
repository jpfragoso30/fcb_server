const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Coords2D = new Schema(
    {
        x: { type: Number, required: true, default: 0 },
        y: { type: Number, required: true, default: 0 },
    },
    { _id: false }
);

const Box = new Schema({
    areaId: { type: String, required: true },
    totalHours: { type: Number, required: true, default: 0 },
    available: { type: Boolean, required: true, default: true },
    coords: { type: Coords2D, required: true },
});

module.exports = mongoose.model("boxes", Box);
