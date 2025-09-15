var express = require('express');
var router = express.Router();

/* GET forside */
router.get('/', async (req, res) => {
  res.render('index', { title: 'Cookie App' });
});

module.exports = router;