var express = require('express');
var router = express.Router();
var users = require('../db/users');

/* GET users */
router.get('/', (req, res, next) => {
  res.json(users);
});

/* GET specific user by username */
router.get('/:username', (req, res, next) => {
  const username = req.params.username;
  const user = users.find((u) => u.username === username);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found!' });
  }

  res.json(user);
});

/* POST create new user */
router.post('/create', (req, res, next) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

/* PUT update user by username */
router.put('/update/:username', (req, res, next) => {
    const username = req.params.username;
    const updatedData = req.body;
    const userIndex = users.findIndex((u) => u.username === username);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found!' });
    }

    users[userIndex] = { ...users[userIndex], ...updatedData };
    res.json(users[userIndex]);
});

/* DELETE user by username */
router.delete('/delete/:username', (req, res, next) => {
    const username = req.params.username;
    const userIndex = users.findIndex((u) => u.username === username);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found!' });
    }

    users.splice(userIndex, 1);
    res.json({ message: 'User deleted!' });
});

module.exports = router;
