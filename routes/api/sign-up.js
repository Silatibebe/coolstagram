const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next){
    // res.send('hello from index');
    res.render('sign-up');
});
module.exports = router;