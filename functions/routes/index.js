var express = require('express');
var router = express.Router();
var db = require('../databaseHandler').db


/* GET users listing. */
router.get('/', function(req, res, next) {
    db.demoInitialize().then((result) => {
        res.send(result)
    })
});

module.exports = router;
