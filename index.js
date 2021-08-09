import express from "express";

//app setup
const app = express();


app.use(express.static('public'));
const port = 5000;
const server = app.listen(port, ()=>{
    console.log("app listen on port " + port);
})