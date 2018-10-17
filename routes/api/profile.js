const express = require('express');
const router = express.Router();
const Profile = require('../../model/profile');
router.get('/', function(req, res, next){
    // res.send('hello from profile');
    res.render('profile', { title: 'Profile', fullname: 'Hiwot Nega'});
});
module.exports = router;