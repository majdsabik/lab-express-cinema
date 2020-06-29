const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find()
    .then((moviesFromDatabase) => {
      // render a 'books' view with the books data
      console.log(moviesFromDatabase);
      res.render("movies", { movieList: moviesFromDatabase });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
