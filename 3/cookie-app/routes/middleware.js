var express = require('express');
var router = express.Router();

/* simpel middleware der tjekker om cookie eksisterer */
const middleware = (req, res, next) => {
    if (req.cookies.myCookie == 'cookieValue') {
        next();
    } else {
        res.json({ message: 'No middleware route access!' });
    }
}

/* middleware der tjekker om cookie eksisterer */
/* husk GET /cookie/set for at sætte cookie først */
router.get('/', middleware, (req, res) => {
    res.json({ message: 'Cookie found!', cookies: req.cookies });
});

module.exports = router;
