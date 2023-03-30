const express = require("express");
const {HomeProductModel} = require("../models/homeProductModel");

const homeProductRouter = express.Router();

homeProductRouter.post("/addone", async (req,res) => {
     const payload = req.body;

     try {
        const data = await new HomeProductModel(payload);
        data.save();
        res.status(200).send({"msg":"data has been added successfully"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
});

homeProductRouter.post("/addmany", async (req,res) => {
    const payload = req.body;

    try {
       const data = await  HomeProductModel.insertMany(payload);
       res.status(200).send({"msg":"data has been added successfully"});
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});

homeProductRouter.get("/", async (req,res) => {

   const query = req.query;

    try {
       const data = await  HomeProductModel.find(query);
       res.status(200).send(data);
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});


homeProductRouter.patch("/update/:id", async (req,res) => {
   const id = req.params.id;
   const payload = req.body;

    try {
       await  HomeProductModel.findByIdAndUpdate(id,payload);
       res.status(200).send({"msg":"data has been updated successfully"});
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});

homeProductRouter.patch("/updatemany", async (req,res) => {
    // const id = req.params.id;
    const payload = req.body;
 
     try {
      const data = await HomeProductModel.updateMany({ category: { $ne: "bp_monitors" } }, {$set: payload});
      res.status(200).send({"msg":"data has been updated successfully"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
 });

homeProductRouter.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;
 
     try {
        await  HomeProductModel.findByIdAndDelete(id);
        res.status(200).send({"msg":"data has been deleted successfully"});
     } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
     }   
 });


module.exports = {homeProductRouter};