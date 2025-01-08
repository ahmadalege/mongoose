const express = require("express");
const { insertManyDoc } = require("./models/Movies");

const connectDB = require("./db/connectDB");
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

// Connect to the database
connectDB(DATABASE_URL);

// Create a new movie document
insertManyDoc();

app.listen(port, () => console.log(`Server listening on port ${port}`));
