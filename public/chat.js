//make connection

const socket = io.connect('http://localhost:5000');

//Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

//emit events
btn.addEventListener('click',()=>{
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value ="";
})

//Listen for events
socket.on('chat', (data)=>{
    output.innerHTML += '<p><strong>'+data.handle+':</strong>'+data.message+'</p>';
})