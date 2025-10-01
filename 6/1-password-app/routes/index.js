var express = require('express');
var router = express.Router();

const users = [
  { id: 1, username: 'mwndigi', password: 'minhundheddertorben' },
  { id: 2, username: 'hildigi', password: 'pippilangstrump' }
];

// GET index
router.get('/', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.render('index', { title: 'Password App' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.cookie('loggedIn', 'true');
    res.cookie('id', user.id);
    res.status(200).json({ message: 'Du er nu logget ind med id ' + user.id + '.' });
  } else {
    res.status(401).json({ message: 'Forkert brugernavn eller adgangskode.' });
  }
});

router.get('/protected', (req, res) => {
  if (req.cookies && req.cookies.loggedIn === 'true') {
    res.status(200).json({ message: 'Du har adgang til den beskyttede side med id ' + req.cookies.id + '.' });
  } else {
    res.status(401).json({ message: 'Du skal logge ind for at få adgang.' });
  }
});

module.exports = router;
