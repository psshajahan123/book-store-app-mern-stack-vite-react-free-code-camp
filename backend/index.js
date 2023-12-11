import express, { request, response } from "express";
import {PORT, mongoDBURL} from "./config.js"
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body 
app.use(express.json());

//Middleware for handling CORS policy 
//Option-1: allow origis with default of cors(*)
app.use(cors());
//Option-2: allow custom origins
//app.use(
//    cors(
//        {
//            origin: "http://localhost:3000",
//            methods: ["GET", "POST","PUT", "DELETE"],
//            allowedHeaders: ["content-type"]
//        }
//    )
//)

app.get("/", (request, response) => {
    console.log(request)
    return response.status(200).send("Hello S");
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log("App connected Successfully")
        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`)
    })
    })
    .catch((error) => {
        console.log(error)
});

