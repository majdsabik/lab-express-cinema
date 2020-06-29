const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find()
    .then((moviesFromDatabase) => {
      console.log(moviesFromDatabase);
      res.render("movies", { movieList: moviesFromDatabase });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res) => {
  console.log(req.params.id);
  Movie.findById(req.params.id)
    .then((movie) => {
      console.log(movie);
      res.render("movieDetails", { movie });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
