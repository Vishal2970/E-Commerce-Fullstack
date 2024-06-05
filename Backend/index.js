const express=require('express');
const app=express();
const ConnectDB = require('./Connection/ConnectDB');
// const mongoose=require('mongoose')

// const URI='mongodb+srv://vishalagraharibasti:Agrahari123@cluster0.fwudeea.mongodb.net/mern_admin?retryWrites=true&w=majority';
// const URI='mongodb://localhost:27017/e-com';

const PORT="5000";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(URI);
//         console.log("Connection successful to database");
//     } catch (error) {
//         console.error("Database connection failed:", error);
//         process.exit(1);
//     }
// };

ConnectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port:${PORT}`);
    });
  });