import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// const port = process.env.PORT || 5000
import connectDb from '../config/db.js'
import path from 'path';
import cookieParser from 'cookie-parser'
import Lab from '../iolab.js'
import HTTP from 'http'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
// routes

import RolesRoutes from './routes/rolesRoutes.js'
import UserRoutes from './routes/userRoutes.js'
connectDb()
const app = express()

var http = HTTP.createServer(app);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api/roles', RolesRoutes)
app.use('/api/users', UserRoutes)
app.get('/', (req, res) => res.send("Server started"))
app.use(notFound);
app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`))
const port =
    process.env.NODE_ENV === "production" ? process.env.PORT || 5000 : 5000;
http.listen(port, () => console.log("Server listening on port " + port));

let io = Lab(http);
global.io = io;