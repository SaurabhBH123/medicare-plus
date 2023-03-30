const express = require("express");
require("dotenv").config();
const {connect} = require("./db");
const { homeProductRouter } = require("./routes/homeProducts.routes");
const {productPageRouter} = require("./routes/productPage.routes");
const {userRouter} = require("./routes/user.routes");
const { cartProductRouter } = require("./routes/cartProducts.routes");
const { addressRouter } = require("./routes/address.routes");
const {orderProductRouter} = require("./routes/order.routes")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/homeProducts",homeProductRouter);
app.use("/productPage",productPageRouter);
app.use("/auth",userRouter);
app.use("/cart",cartProductRouter);
app.use("/address",addressRouter);
app.use("/orders",orderProductRouter)

app.listen(process.env.port,async() => {
    try {
        await connect
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
        console.log("disconnected from db");
    }
})