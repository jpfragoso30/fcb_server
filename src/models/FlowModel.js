const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlowEntry = new Schema({
    boxId: { type: String, required: true },
    entryDate: { type: Date, required: true },
});

module.exports = mongoose.model("flow", FlowEntry);
