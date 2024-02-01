const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 }).then(() => {
    console.log("successfully connected to database");
}).catch((error) => {
    console.log(error);
})

// define the schema 
const movies = new mongoose.Schema({
    id: String,
    title: String,
    year_of_release: String,
    rating: Number,
    poster: String
})

// to define model of schema

const Movies = new mongoose.model("Movie", movies);

module.exports = { Movies };