import express from "express";
 import mongoose from 'mongoose';
 import router from "./routes/User-routes.js";
 import studentRouter from "./routes/student-routes.js";
 import bookRouter from "./routes/book-routes.js";
// const mongoose = require('mongoose');
const url = 'mongodb:27017/localhost/library'
const app= express();
app.use(express.json());
// mongoose.connect(url,{useNewUrlParser:true}).then(()=>console.log("db connected"))
// const con= mongoose.connection
// app.use("/api",(req,res,next )=> {
//     res.send("akjhgbjhghjgvhjghjgjhgjh")
// })

app.use("/api/user", router) ;
app.use("/api/book",  bookRouter);
app.use("/api/student",  studentRouter);
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/library').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
app.listen(5000, ()=>{console.log("server start")})
