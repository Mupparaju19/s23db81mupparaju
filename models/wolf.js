const mongoose = require("mongoose")
const wolfSchema = mongoose.Schema({
    wolf_name: String,
    wolf_age: Number,
    wolf_price: Number
})
module.exports = mongoose.model("wolf",
wolfSchema)