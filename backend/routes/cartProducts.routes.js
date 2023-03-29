const express = require("express");
const { authenticated } = require("../middlewares/authenticatedUser");
const {CartProductModel} = require("../models/cartProductModel");
const jwt = require("jsonwebtoken");

const cartProductRouter = express.Router();
cartProductRouter.use(authenticated);

cartProductRouter.post("/addone", async (req,res) => {
     const payload = req.body;

     try {
        const data = await new CartProductModel(payload);
        data.save();
        res.status(200).send({"msg":"data has been added to Cart"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
});

cartProductRouter.post("/addmany", async (req,res) => {
    const payload = req.body;

    try {
       const data = await  CartProductModel.insertMany(payload);
       res.status(200).send({"msg":"data has been added to cart"});
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});

cartProductRouter.get("/", async (req,res) => {
    const token = req.headers.authorization.split(" ")[1];
    const userID = jwt.verify(token, "subodh").userID;

    // const { min, max, pages } = req.query;
    // const skip = (pages - 1) * 3;

    try {
       const data = await  CartProductModel.find({userID});
       res.status(200).send(data);
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});


cartProductRouter.patch("/update/:id", async (req,res) => {
   const id = req.params.id;
   const payload = req.body;

    try {
       await  CartProductModel.findByIdAndUpdate(id,payload);
       res.status(200).send({"msg":"data has been updated successfully"});
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});

cartProductRouter.patch("/updatemany", async (req,res) => {
    // const id = req.params.id;
    const payload = req.body;
 
     try {
      const data = await CartProductModel.updateMany({ category: { $ne: "bp_monitors" } }, {$set: payload});
      res.status(200).send({"msg":"data has been updated successfully"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
 });

cartProductRouter.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;
 
     try {
        await  CartProductModel.findByIdAndDelete(id);
        res.status(200).send({"msg":"data has been deleted successfully"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
 });


module.exports = {cartProductRouter};