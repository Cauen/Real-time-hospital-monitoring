
const express = require('express');
const app = express();
const server = app.listen(3001, function () {
    console.log('server running on port 3001');
});
const io = require('socket.io')(server);
var currentUsersIds = [];
var currentUsers = {};

io.on('connection', function (socket) {
    console.log('Connected ' + socket.id);
    console.log(Object.keys(io.sockets.sockets));
    currentUsersIds = Object.keys(io.sockets.sockets);
    

    //console.log(io.sockets.clients());
    socket.on('disconnect', function () {
        console.log('Desconectado ' + socket.id);
        console.log(Object.keys(io.sockets.sockets));
        delete currentUsers[socket.id];
        io.emit('EDIT', currentUsers);

    });
    socket.on('HOSPITAL', function(data) {
        socket.join('ADMINISTRADORES');
        io.to('ADMINISTRADORES').emit('ADMINS', currentUsers);
    });
    socket.on('SEND_MESSAGE', function (data) {
        currentUsers[socket.id] = data;
        io.emit('EDIT', currentUsers);
    });
});