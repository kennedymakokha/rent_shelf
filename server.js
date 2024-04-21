import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// const port = process.env.PORT || 5000
import connectDb from './config/db.js'
import path from 'path';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import Lab from './iolab.js'
import HTTP from 'http'
// import path from 'path';


import { errorHandler, notFound } from './src/middlewares/errorMiddleware.js';
// routes

import RolesRoutes from './src/routes/rolesRoutes.js'
import UserRoutes from './src/routes/userRoutes.js'
import TypesRoutes from './src/routes/typesRoutes.js'
import TownsRoutes from './src/routes/townsRoutes.js'
import AreaRoutes from './src/routes/areaRoutes.js'
import ShelfsRoutes from './src/routes/shelfRoutes.js'
import FeatureRoutes from './src/routes/featureRoutes.js'
import AbuseRoutes from './src/routes/abuseRoutes.js'
import FCMroutes from './src/routes/fcmAdminRoutes.js'
import Categoryroutes from './src/routes/categoryRoutes.js'

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
connectDb()
const app = express()
app.use(cors("*"))
var http = HTTP.createServer(app);
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.use('/api/roles', RolesRoutes)
app.use('/api/fcm', FCMroutes)
app.use('/api/users', UserRoutes)
app.use('/api/types', TypesRoutes)
app.use('/api/towns', TownsRoutes)
app.use('/api/areas', AreaRoutes)
app.use('/api/shelves', ShelfsRoutes)
app.use('/api/features', FeatureRoutes)
app.use('/api/abuses', AbuseRoutes)
app.use('/api/categories', Categoryroutes)


const __dirname = path.dirname(__filename);
// app.use('/uploads', express.static(path.join(__dirname, 'public')));
// console.log('directory-name 👉️', __dirname);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.send("Server started"))
app.use(notFound);
app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`))
const port =
    process.env.NODE_ENV === "production" ? process.env.PORT || 5000 : 5000;
http.listen(port, () => console.log("Server listening on port " + port));

let io = Lab(http);
global.io = io;