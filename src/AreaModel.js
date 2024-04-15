const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Coords = new Schema({
    x: { type: String, required: true },
    y: { type: String, required: true },
    lat: { type: String, required: true },
    long: { type: String, required: true },
});

const Coords2D = new Schema({
    x: { type: String, required: true },
    y: { type: String, required: true },
});

const Box = new Schema({
    coords: { type: Coords2D, required: true },
    available: { type: Boolean, required: true },
    totalHours: { type: Number, required: true },
});

const Layout = new Schema({
    layer: { type: String, required: true },
    boxMap: { type: [Box], required: true },
    totalHours: { type: Number, required: true },
});

const Area = new Schema({
    lotId: { type: String, required: true },
    areaName: { type: String, required: true },
    coords: { type: Coords, required: true },
    boxLayout: { type: [Layout], required: true },
    totalHours: { type: Number, required: true },
});

module.exports = mongoose.model("areas", Area);
