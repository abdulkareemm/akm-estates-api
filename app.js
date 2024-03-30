import app from "./apps/index.js";





/// listening express
app.listen(process.env.PORT,()=>{
    console.log("server is listening on port " + process.env.PORT)
})