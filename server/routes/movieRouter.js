const express = require("express");
// const { getAllMovies, getMovie, addMovie, updateMovie, deleteMovie } = require("../controllers/movieController");
const { getAllMovies, getMovie, addMovie, updateMovie, deleteMovie } = require("../controllers/mongoMovieController");


const router = express.Router();

router.get("/", getAllMovies);
router.get("/:movieId", getMovie);
router.post("/", addMovie);
router.patch("/update/:id", updateMovie);
router.delete("/delete/:id", deleteMovie);

module.exports = router;