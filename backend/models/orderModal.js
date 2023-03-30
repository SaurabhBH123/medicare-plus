const mongoose = require("mongoose");

const orderProductSchema = mongoose.Schema({
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

const OrderProductModel = mongoose.model("orderItem",orderProductSchema);

module.exports = {OrderProductModel};