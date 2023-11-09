var express = require('express');
const wolf_controlers= require('../controllers/wolf');
var router = express.Router();
/* GET costumes */
router.get('/', wolf_controlers.wolf_view_all_Page );
module.exports = router;