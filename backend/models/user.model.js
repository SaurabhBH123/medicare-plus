const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password:String,
    profile_url: String,
    mobile_no: Number
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel};