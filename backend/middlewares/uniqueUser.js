const {UserModel} = require("../models/user.model");

const uniqueUser = async (req,res,next) => {
    const {email} = req.body;
    const user = await UserModel.find({email});
    if(user.length>0){
        res.status(400).send("User already exist, please login")
    }else{
        next();
    }
}

module.exports = {uniqueUser};