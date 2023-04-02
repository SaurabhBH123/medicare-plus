const express = require("express");
const {UserModel} = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register",async(req,res) => {
    const {name,email,password,profile_url,mobile_no} = req.body;

    const user = await UserModel.find({email});
    if(user.length>0){
        res.status(400).send("User already exist, please login")
    }else{
        try {
            bcrypt.hash(password, 5,async (err, hash) => {
                const user = await new UserModel({name,email,password:hash,profile_url,mobile_no});
                user.save();
                res.status(200).send({"msg":"user registered successfuly"});
            })
        } catch (error) {
            console.log(error);
            res.status(400).send({"msg":"error occured"});
        }
    }
});

userRouter.get("/",async(req,res) => {
    try {
        const users = await  UserModel.find();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"error occured"});
    }
});

userRouter.get("/:id",async(req,res) => {
    const id = req.params.id;

    try {
        const users = await  UserModel.findById(id);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"error occured"});
    }
});

userRouter.post("/login",async (req,res) => {
    const {password,email} = req.body;
    try {
        const user = await UserModel.find({email});
        if(user.length > 0){
            bcrypt.compare(password, user[0].password,async (err, result) => {
               if(result){
                res.status(200).send({"msg":"user registered successfuly","token":jwt.sign({userID:user[0]._id},"subodh")});
               }else{
                res.status(400).send({"msg":"login Failed"});
               }    
            })
        }else{
            res.status(400).send({"msg":"login Failed"});
        } 
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"error occured"});
    }
})

module.exports = {userRouter}