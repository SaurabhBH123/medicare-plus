const express = require("express");
const {AddressModel} = require("../models/addressModel");
const jwt = require("jsonwebtoken");
const { authenticated } = require("../middlewares/authenticatedUser");
const addressRouter = express.Router();

addressRouter.use(authenticated);

addressRouter.post("/addone", async (req,res) => {
    const payload = req.body;

    try {
       const data = await new AddressModel(payload);
       data.save();
       res.status(200).send({"msg":"address has been added successfully"});
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});

addressRouter.post("/addmany", async (req,res) => {
   const payload = req.body;

   try {
      const data = await  AddressModel.insertMany(payload);
      res.status(200).send({"msg":"address has been added successfully"});
   } catch (error) {
      console.log(error);
      res.status(400).send({"msg":"Some error"});
   }   
});

addressRouter.get("/", async (req,res) => {
    const token = req.headers.authorization.split(" ")[1];
    const userID = jwt.verify(token, "subodh").userID;

   try {
      const data = await  AddressModel.find({userID});
      res.status(200).send(data);
   } catch (error) {
      console.log(error);
      res.status(400).send({"msg":"Some error"});
   }   
});

addressRouter.get("/:id", async (req,res) => {
   const token = req.headers.authorization.split(" ")[1];
   const userID = jwt.verify(token, "subodh").userID;
   
   const query = req.query
   query.userID = userID

  try {
     const data = await  AddressModel.find(query);
     res.status(200).send(data);
  } catch (error) {
     console.log(error);
     res.status(400).send({"msg":"Some error"});
  }   
});

addressRouter.patch("/update/:id", async (req,res) => {
  const id = req.params.id;
  const payload = req.body;

   try {
      await  AddressModel.findByIdAndUpdate(id,payload);
      res.status(200).send({"msg":"address has been updated successfully"});
   } catch (error) {
      console.log(error);
      res.status(400).send({"msg":"Some error"});
   }   
});

addressRouter.delete("/delete/:id", async (req,res) => {
   const id = req.params.id;

    try {
       await  AddressModel.findByIdAndDelete(id);
       res.status(200).send({"msg":"address has been deleted successfully"});
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
});

module.exports = {addressRouter};