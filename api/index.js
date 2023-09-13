import  express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import movieRoute from "./routes/movieRoute.js"
import cors from "cors" 


const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors({
//      origin: "https://movie-theater-front-end.vercel.app",
//      methods: ["PUT", "POST", "GET", "DELETE"],
//      allowedHeaders: ["Content-Type"]
// }))

app.use("/movies", movieRoute)


const PORT = process.env.PORT

app.get('/', (request, response) => {
    console.log(request)
    return response.status(200).send('it works now')
} )




mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('app is connected to the database');
        app.listen(PORT, () => {
            console.log(`we are listening on port ${PORT}`) 
        })
    })
    .catch((error) => {
        console.log(error)
    });

