

const home =async(req,res)=>{
    try {
        res.status(200).send("Hello Vishal From home");
    } catch (error) {
        console.error(error)
    }
}

module.exports= {home};