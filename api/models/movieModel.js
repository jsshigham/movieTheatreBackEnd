import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    showTime1: {
        type: String,
        required: true
    },
    showTime2: {
        type: String,
        required: false
    },
    showTime3: {
        type: String,
        required: false
    },
    showTime4: {
        type: String,
        required: false
    },
    showTime5: {
        type: String,
        required: false
    },
    showTime6: {
        type: String,
        required: false
    },
  },
  {
    timestamps: true,
  }
);

export const Movie = mongoose.model("Movie", movieSchema);
