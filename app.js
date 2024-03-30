import express from "express"


const app= express()



console.log("test")
app.listen(8000,()=>{
    console.log("server run at http://localhost:8000")
})