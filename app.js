const express=require("express")
const app=express();

app.get("/test",(req,res)=>{
    res.send("getting");
})
app.post("/test",(req,res)=>{
    res.send("posting");
})
app.delete("/test",(req,res)=>{
    res.send("deleting");
})
app.put("/test",(req,res)=>{
    res.send("putting");
})
app.get("/user/:userid/:name/:pass",(req,res)=>{
    console.log(req.params);
})
app.listen(7777);