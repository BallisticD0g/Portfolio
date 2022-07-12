var express = require('express');
var router = express.Router();


// this is the this will get the About page
router.get('/', (req, res, next) => {
  res.render('home', 
  {//here is a handlebar in use
    title: "Home",
    head: "Portfolio"
  });
});

// this is the this will GET the About page
router.get('/about', (req, res, next) => {
  res.render('about', 
  {//here are two handlebars
    name: "Mikel Varvaro",
    title: "About"
  });
});

// this is the this will GET the Projects page
router.get('/projects', (req, res, next) => {
  res.render('projects', {title: "Projects"});
});

// this is the this will GET the Contact page
router.get('/contact', (req, res, next) => {
  res.render('contact', {title: "Contact"});
});

module.exports = router;