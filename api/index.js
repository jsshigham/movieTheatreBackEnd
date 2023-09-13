const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
// const mongoose = require('mongoose');
// const movieRoute = require('./routes/movieRoute.js');
const cors = require('cors');

const app = express();



app.use(express.json());

app.use(cors());

// app.use(cors({
//      origin: "https://movie-theater-front-end.vercel.app",
//      methods: ["PUT", "POST", "GET", "DELETE"],
//      allowedHeaders: ["Content-Type"]
// }))

// app.use("/movies", movieRoute)

// app.post("/api/movies", async (request, response) => {
//     try {
//       if (
//         !request.body.title ||
//         !request.body.genre ||
//         !request.body.releaseYear ||
//         !request.body.showTime1
//       ) {
//         return response.status(400).send({
//           message: "send all required fields, title, relaseYear, genre, showTime1",
//         });
//       }
     
//       const newMovie = {
//         title: request.body.title,
//         genre: request.body.genre,
//         releaseYear: request.body.releaseYear,
//         showTime1: request.body.showTime1,
//         showTime2: request.body.showTime2,
//         showTime3: request.body.showTime3,
//         showTime4: request.body.showTime4,
//         showTime5: request.body.showTime5,
//         showTime6: request.body.showTime6,
//       };
  
//       const movie = await Movie.create(newMovie);
  
//       response.status(201).send(movie);
//     } catch (error) {
//       console.log(error.message);
//       response.status(500).send({ message: error.message });
//     }
//   });
  
//   app.get("/api/movies", async (request, response) => {
//     try {
//       const movies = await Movie.find({});
  
//       return response.status(200).send({
//         count: movies.length,
//         data: movies,
//       });
//     } catch (error) {
//       console.log(error);
//       response.status(500).json({ message: error.message });
//     }
//   });
  
//   app.get("/api/movies/:id", async (request, response) => {
//     try {
//       const { id } = request.params;
//       const movie = await Movie.findById(id);
  
//       return response.status(200).json({
//         movie,
//       });
//     } catch (error) {
//       console.log(error);
//       response.status(500).send({ message: error.message });
//     }
//   });
  
//   app.put("/api/movies/:id", async (request, response) => {
//     try {
//       if (
//         !request.body.title ||
//         !request.body.genre ||
//         !request.body.releaseYear ||
//         !request.body.showTime1
//       ) {
//         return response.status(400).send({
//           message: "send all required fields, title, relaseYear, genre, showTime1",
//         });
//       }
  
//       const { id } = request.params;
  
//       const result = await Movie.findByIdAndUpdate(id, request.body);
  
//       if (!result) {
//         return response.status(404).send({
//           message: "movie not found",
//         });
//       }
  
//       response.status(200).send({ message: "movie updated" });
//     } catch (error) {
//       console.log(error.message);
//       response.status(500).send({ message: error.message });
//     }
//   });
  
//   app.delete("/api/movies/:id", async (request, response) => {
//     try {
//       const { id } = request.params;
  
//       const result = await Movie.findByIdAndDelete(id);
  
//       if (!result) {
//         return response.status(404).send({
//           message: "movie not found",
//         });
//       }
  
//       return response.status(202).send({ message: "movie deleted" });
//     } catch (error) {
//       console.log(error.message);
//       response.status(500).send({ message: error.message });
//     }
//   });


const PORT = process.env.PORT

app.get('/api', (request, response) => {
    console.log(request)
    return response.status(200).send('it works')
} )

app.listen(PORT)


// mongoose
//     .connect(process.env.MONGO_DB_URL)
//     .then(() => {
//         console.log('app is connected to the database');
//         app.listen(PORT, () => {
//             console.log(`we are listening on port ${PORT}`) 
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     });



module.exports = app;
