var express = require('express');
var router = express.Router();

/* endpoint som sætter en express-session cookie for bruger */
router.get('/login', (req, res) => {
    req.session.user = { username: 'mikkel' }; // Simpel brugerobjekt i JSON
    res.json({ message: 'User logged in!' });
});

/* endpoint som fjerner express-session cookie for bruger */
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.json({ message: 'User logged out!' });
});

/* beskyttet endpoint som kræver at brugeren er logget ind med session */
router.get('/protected', (req, res) => {
    if (req.session.user) {
        res.json({ message: `Welcome ${req.session.user.username}!` });
    } else {
        res.status(401).json({ message: 'Unauthorized access!' });
    }
});

module.exports = router;
