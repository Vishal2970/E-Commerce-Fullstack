require('dotenv').config();
const express=require('express');
const app=express();
const ConnectDB = require('./Connection/ConnectDB');

const port=process.env.PORT;
ConnectDB().then(() => {
    app.listen(port, () => {
      console.log(`server is running at port:${port}`);
    });
  });