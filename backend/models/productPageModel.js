const mongoose = require("mongoose");

const productPageSchema = mongoose.Schema({
    category: String,
    image_url: String,
    product_title: String,
    pack_size:String,
    avg_rating: Number,
    total_ratings: String,
    MRP: Number,
    discount: String,
    final_price: Number
},{
    versionKey:false
})

const ProductPageModel = mongoose.model("productpageitem",productPageSchema);

module.exports = {ProductPageModel};