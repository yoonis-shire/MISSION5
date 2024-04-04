const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    location: String,
    closeDate: String,
    bids: Number,
    bidsValue: Number,
    buyValue: Number,
    user: String,
})

module.exports = mongoose.model("Product", productSchema);