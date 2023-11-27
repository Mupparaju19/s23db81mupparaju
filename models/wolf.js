const mongoose = require("mongoose")
const wolfSchema = mongoose.Schema({
    wolf_name: String,
    wolf_age: {
        type: String,
        required: true,
        minlength: 0, 
        maxlength: 50,
       
      },
    wolf_price: {
        type: Number,
        required: true,
        min: 5,
        max: 1000,
      },
})
module.exports = mongoose.model("wolf",wolfSchema)