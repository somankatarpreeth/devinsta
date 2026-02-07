const express=require("express");
const app=express();
app.use("/test",(req,res)=>{
    res.send("testing");
})
app.use("/read",(req,res)=>{
    res.send("read");
})

app.use((req,res)=>{
    res.send("hello server i am");
})

app.listen(1423);   