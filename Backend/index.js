require('dotenv').config();
const express=require('express');
const app=express();
const ConnectDB = require('./Connection/ConnectDB');
const AuthRoutes=require('./Routes/AuthRoutes');

app.use("/api/auth",AuthRoutes);


const port=process.env.PORT;
ConnectDB().then(() => {
    app.listen(port, () => {
      console.log(`server is running at port:${port}`);
    });
  });