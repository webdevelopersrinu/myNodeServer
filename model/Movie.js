const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "movie title is required"],
    },
    director: {
      type: String,
      required: [true, "movie director is required"],
    },
    release_year: {
      type: Number,
      required: [true, "movie release year is required"],
    },
    genres: {
      type: Array,
      required: [true, "movie genres is required"],
    },
    rating: {
      type: Number,
      required: [true, "movie rating is required"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
MovieSchema.virtual("title_with_rating").get(function () {
  return `${this.title} rating is ${this.rating}`;
});

const MoviesModel = mongoose.model("MovieModel", MovieSchema);

module.exports = MoviesModel;
