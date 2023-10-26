import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    movieBooked1: {
        type: String,
        required: true
    },
    movieBooked2: {
        type: String,
        required: false
    },
    movieBooked3: {
        type: String,
        required: false
    },
    
  },
  {
    timestamps: true,
  }
);

export const Movie = mongoose.model("Movie", movieSchema);