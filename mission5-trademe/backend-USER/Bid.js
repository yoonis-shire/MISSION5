const mongoose = require("mongoose");

const BidElementSchema = new mongoose.Schema({
    name: String,
    location: String,
    closeDate: String,
    buyValue: Number,
    user: String,
})

module.exports = mongoose.model("BidElement", BidElementSchema);