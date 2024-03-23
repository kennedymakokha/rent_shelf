
import { Server } from 'socket.io'
// 

// import User from './src/models/patientModel.js'
const Lab = (http) => {
    const io = new Server(http, {
        cors: {
            origin: ["http://localhost:3000", "https://learnnia.com"]
        }
    })
    let users = []


    // const addUser = async (user_id, socket_id) => {
    //     const k = await User.findById(user_id)
    //     !users.some(user => user.user_id === user_id) &&
    //         users && users.push({ user_id, socket_id, name: k.firstname, surname: k.surname })
    // };
    // const RemoveUser = (socket_id) => {
    //     users = users.filter(user => {
    //         user.socket_id !== socket_id
    //     })
    // }
    // const getUser = (user_id) => {

    //     return users.find(user => user.user_id === user_id)
    // }

    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
        });
        socket.on('typing', () => {
            console.log('Typing: ');
        });
    });
}
export default Lab


// import express from 'express';
// import { createServer } from 'node:http';
// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
// import { Server } from 'socket.io';
// import cors from 'cors'

// const app = express();
// const server = createServer(app);
// // const io = new Server(server);

// // io.origins('*:*')
// const io = new Server(server, {
//     cors: {
//         origin: [
//             "http://marapesa.com",
//             "https://marapesa.com",
//             "http://localhost:3000",
//             "http://localhost:4000",
//         ],
//     },
// })

// const __dirname = dirname(fileURLToPath(import.meta.url));
// // app.use(cors());
// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, 'index.html'));
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//     });
// });

// server.listen(5000, () => {
//     console.log('server running at http://localhost:5000');
// });