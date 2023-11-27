var express = require('express');
const wolf_controlers= require('../controllers/wolf');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
/* GET costumes */
router.get('/', wolf_controlers.wolf_view_all_Page );

/* GET detail wolf page */
router.get('/detail',secured, wolf_controlers.wolf_view_one_Page);

/* GET create costume page */
router.get('/create',secured, wolf_controlers.wolf_create_Page);

/* GET create update page */
router.get('/update',secured, wolf_controlers.wolf_update_Page);

/* GET delete costume page */
router.get('/delete',secured, wolf_controlers.wolf_delete_Page);
module.exports = router;