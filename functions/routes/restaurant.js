var express = require('express');
var router = express.Router();
var db = require('../databaseHandler').db


/* GET users listing. */
router.get(/\/[A-Za-z0-9\-]+\/menu/, function(req, res, next) {
    const rName = req.url.split('/')[1].toLowerCase()
    db.getMenu(rName).then((menu) => {
        console.log(JSON.stringify(menu))
        res.send(JSON.stringify(menu))
    })
});

router.get(/\/[A-Za-z0-9\-]+\/waitlist/, function(req, res, next) {
    const rName = req.url.split('/')[1].toLowerCase()
    db.getWaitlist(rName).then((waitlist) => {
        res.send(waitlist)
    })
});

module.exports = router