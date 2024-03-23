import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import cors from 'cors'

const app = express();
const server = createServer(app);
// const io = new Server(server);

// io.origins('*:*')
const io = new Server(server, {
    cors: {
        origin: [
            "http://marapesa.com",
            "https://marapesa.com",
            "http://localhost:3000",
            "http://localhost:4000",
        ],
    },
})

const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(5000, () => {
    console.log('server running at http://localhost:5000');
});