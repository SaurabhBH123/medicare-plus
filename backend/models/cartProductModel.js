const mongoose = require("mongoose");

const cartProductSchema = mongoose.Schema({
    image_url:String,
    product_title: String,
    pack_size: String,
    MRP: Number,
    discount: String,
    final_price: Number,
    category:String,
    userID:String
},{
    versionKey:false
})

const CartProductModel = mongoose.model("cartItem",cartProductSchema);

module.exports = {CartProductModel};