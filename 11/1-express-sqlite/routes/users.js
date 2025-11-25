var express = require('express');
var router = express.Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./mydb.sqlite");

/* GET all users in json */
router.get('/', (req, res, next) => {
    db.all("SELECT id, username, email FROM users", [], (err, rows) => {
        if (err) {
            return next(err);
        }
        if (!rows || rows.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }
        res.status(200).json(rows);
    });
});

/* GET user by ID in json */
router.get('/:id', (req, res, next) => {
    const userId = req.params.id;
    db.get("SELECT id, username, email FROM users WHERE id = ?", [userId], (err, row) => {
        if (err) {
            return next(err);
        }
        if (!row) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(row);
    });
});

module.exports = router;