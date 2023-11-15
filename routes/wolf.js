var express = require('express');
const wolf_controlers= require('../controllers/wolf');
var router = express.Router();
/* GET costumes */
router.get('/', wolf_controlers.wolf_view_all_Page );

/* GET detail wolf page */
router.get('/detail', wolf_controlers.wolf_view_one_Page);

/* GET create costume page */
router.get('/create', wolf_controlers.wolf_create_Page);

/* GET create update page */
router.get('/update', wolf_controlers.wolf_update_Page);

/* GET delete costume page */
router.get('/delete', wolf_controlers.wolf_delete_Page);
module.exports = router;