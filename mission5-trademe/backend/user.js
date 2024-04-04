const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    user: String
})

module.exports = mongoose.model("Product", productSchema);