const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    address:String,
    phone_no: Number,
    pinCode: Number,
    userID:String
},{
    versionKey:false
})

const AddressModel = mongoose.model("address",addressSchema);

module.exports = {AddressModel};