const express = require("express");
const { authenticated } = require("../middlewares/authenticatedUser");
const {OrderProductModel} = require("../models/orderModal");
const jwt = require("jsonwebtoken");

const orderProductRouter = express.Router();
// orderProductRouter.use(authenticated);

orderProductRouter.post("/addone", async (req,res) => {
     const payload = req.body;

     try {
        const data = await new OrderProductModel(payload);
        data.save();
        res.status(200).send({"msg":"data has been added to Cart"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
});

orderProductRouter.post("/addmany", async (req,res) => {
    const payload = req.body;

    try {
       const data = await  OrderProductModel.insertMany(payload);
       res.status(200).send(data);
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});

orderProductRouter.get("/", async (req,res) => {
   //  const token = req.headers.authorization.split(" ")[1];
   //  const userID = jwt.verify(token, "subodh").userID;

    try {
       const data = await  OrderProductModel.find();
       res.status(200).send(data);
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});


orderProductRouter.patch("/update/:id", async (req,res) => {
   const id = req.params.id;
   const payload = req.body;

    try {
       await  OrderProductModel.findByIdAndUpdate(id,payload);
       res.status(200).send({"msg":"data has been updated successfully"});
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});

orderProductRouter.patch("/updatemany", async (req,res) => {
    // const id = req.params.id;
    const payload = req.body;
 
     try {
      const data = await OrderProductModel.updateMany({ category: { $ne: "bp_monitors" } }, {$set: payload});
      res.status(200).send({"msg":"data has been updated successfully"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
 });

orderProductRouter.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;
 
     try {
        await  OrderProductModel.findByIdAndDelete(id);
        res.status(200).send({"msg":"data has been deleted successfully"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
 });


module.exports = {orderProductRouter};