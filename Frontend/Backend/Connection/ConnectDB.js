require('dotenv').config();
const mongoose =require('mongoose');

const URI=process.env.URI;
const ConnectDB =async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connected to database");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
module.exports =ConnectDB;