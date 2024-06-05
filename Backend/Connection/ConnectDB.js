const mongoose =require('mongoose');

const URI='mongodb+srv://vishalagraharibasti:Agrahari123@cluster0.fwudeea.mongodb.net/mern_admin?retryWrites=true&w=majority';
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