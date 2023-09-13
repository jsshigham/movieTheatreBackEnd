const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose');
const movieRoute = require('./routes/movieRoute.js');
const cors = require('cors');

const app = express();



app.use(express.json());

app.use(cors());

app.use('/api/movies', movieRoute);


const PORT = process.env.PORT

app.get('/api', (request, response) => {
    console.log(request)
    return response.status(200).send('it works!')
} )

// app.listen(PORT)


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



module.exports = app;
