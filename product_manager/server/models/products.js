let mongoose = require('mongoose')
var ProductSchema =  new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"], minlength: [4, "Title must be 4 characters"] },
    price: { type: Number, required: [true, "Price is required"] },
    image: { type: String }
}, {timestamps: true}) 
let Product = mongoose.model("Product", ProductSchema)
module.exports = Product