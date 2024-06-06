require('dotenv').config();
const express=require('express');
const app=express();
const cors=require("cors");
const ConnectDB = require('./Connection/ConnectDB');
const AuthRoutes=require('./Routes/AuthRoutes');

const corsOptions={
  origin : "http://localhost:3000",
  method:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
}
app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth",AuthRoutes);


const port=process.env.PORT;
ConnectDB().then(() => {
    app.listen(port, () => {
      console.log(`server is running at port:${port}`);
    });
  });