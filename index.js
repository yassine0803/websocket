import express from "express";
import {Server} from "socket.io";

//app setup
const app = express();


const port = 5000;
const server = app.listen(port, ()=>{
    console.log("app listen on port " + port);
})


//static files
app.use(express.static('public'));

//socket setup
const io = new Server(server);

io.on('connection',(socket)=>{
    console.log('socket connection', socket.id);
});