const mongoose = require("mongoose");

const homeProductSchema = mongoose.Schema({
    image_url:String,
    product_title: String,
    pack_size: String,
    MRP: Number,
    discount: String,
    final_price: Number,
    category:String
},{
    versionKey:false
})

const HomeProductModel = mongoose.model("homeProduct",homeProductSchema);

module.exports = {HomeProductModel};