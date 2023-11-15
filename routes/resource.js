var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var wolf_controller = require('../controllers/wolf');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// wolf ROUTES ///
// POST request for creating a wolf.
router.post('/wolf', wolf_controller.wolf_create_post);
// DELETE request to delete wolf.
router.delete('/wolf/:id', wolf_controller.wolf_delete);

// PUT request to update wolf.
router.put('/wolf/:id', wolf_controller.wolf_update_put);
// GET request for one wolf.
router.get('/wolf/:id', wolf_controller.wolf_detail);
// GET request for list of all wolf items.
router.get('/wolf', wolf_controller.wolf_list);
module.exports = router;

