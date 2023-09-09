// // pages/api/socket.js
// import { Server } from 'socket.io';
// import express from 'express';
// import auth from './auth'; // Path to your middleware

// const app = express();

// const server = app.listen(3001, () => {
//     console.log('Socket.io server is running on port 3001');
// });

// const io = new Server(server, {
//     cors: {
//         origin: '*',
//     },
// });

// // Apply the middleware-like behavior to the entire Socket.io connection
// io.use((socket, next) => {
//     auth(socket, next);
// });

// // Store connected clients and their corresponding rooms
// const clients = new Map();

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     socket.on('join room', (roomId) => {
//         if (!clients.has(roomId)) {
//             clients.set(roomId, [socket]);
//         } else {
//             clients.get(roomId).push(socket);
//         }

//         socket.on('chat message', (message) => {
//             const roomClients = clients.get(roomId);
//             if (roomClients) {
//                 roomClients.forEach((client) => {
//                     if (client !== socket) {
//                         client.emit('chat message', message);
//                     }
//                 });
//             }
//         });

//         socket.on('disconnect', () => {
//             const roomClients = clients.get(roomId);
//             if (roomClients) {
//                 const index = roomClients.indexOf(socket);
//                 if (index !== -1) {
//                     roomClients.splice(index, 1);
//                     if (roomClients.length === 0) {
//                         clients.delete(roomId);
//                     }
//                 }
//             }
//             console.log('A user disconnected');
//         });
//     });
// });

// export default app;
