const mongoose = require("mongoose");

//Define schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money_made: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    validate: {
      validator: (v) => parseFloat(v.toString()) >= 10,
      message: "money_made must be at least 10.",
    },
  },
  genre: [{ type: String }],
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

//Create model
const MovieModel = mongoose.model("Movie", movieSchema);

// create a new movie
const insertManyDoc = async () => {
  try {
    const m1 = new MovieModel({
      name: "The Dark Knight",
      ratings: 5,
      money_made: 1000000000,
      genre: ["Action", "Crime", "Drama"],
      isActive: true,
      comments: [{ value: "One of the best movies ever" }],
    });
    const m2 = new MovieModel({
      name: "The Shawshank Redemption",
      ratings: 4.2,
      money_made: 1000000000,
      genre: ["Drama"],
      isActive: true,
      comments: [{ value: "One of the best movies ever" }],
    });
    const m3 = new MovieModel({
      name: "The Godfather",
      ratings: 4.7,
      money_made: 679000000,
      genre: ["Crime", "Drama"],
      isActive: true,
      comments: [{ value: "Great movie" }],
    });

    const m4 = new MovieModel({
      name: "The Godfather: Part II",
      ratings: 4.5,
      money_made: 1000000000,
      genre: ["Crime", "Drama"],
      isActive: true,
      comments: [{ value: "Sick and maybe a little too overrated." }],
    });
    const m5 = new MovieModel({
      name: "Joker",
      ratings: 4.3,
      money_made: 957000000,
      genre: ["Crime", "Drama", "Thriller"],
      isActive: true,
      comments: [{ value: "Very insightful" }],
    });

    const m6 = new MovieModel({
      name: "Harry Potter and the Sorcerer's Stone",
      ratings: 4.1,
      money_made: 974800000,
      genre: ["Adventure", "Family", "Fantasy"],
      isActive: true,
      comments: [
        { value: "Magical movie, perfect for winter and the holiday season." },
      ],
    });
    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5, m6]);
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { insertManyDoc, MovieModel };
