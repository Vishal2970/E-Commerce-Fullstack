require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./Connection/ConnectDB");
const AuthRoutes = require("./Routes/AuthRoutes");
const formRoutes = require("./Routes/formRoutes");
const ProductRoutes = require("./Routes/ProductRoutes");
const Cart =require("./Routes/Cart");


const corsOptions = {
  origin: "http://localhost:3000",
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

//for authentication
app.use("/api/auth", AuthRoutes);
//for contact us
app.use("/api/form", formRoutes);
//for product adding 
app.use("/api/product", ProductRoutes);
//for adding cart
app.use("/api/cart",Cart);



const port = process.env.PORT;
ConnectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running at port:${port}`);
  });
});