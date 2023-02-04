const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.userContext) {
    res.render('index', { title: 'Staffing Portal', user: req.userContext });
  } else {
    res.render('login', { title: 'Staffing Portal' })
  }
});

module.exports = router;