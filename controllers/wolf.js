var wolf = require('../models/wolf');
// List of all wolf


exports.wolf_list = async function(req, res) {
    try{
    thewolf = await wolf.find();
    res.send(thewolf);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

// for a specific wolf.
exports.wolf_detail = function(req, res) {
res.send('NOT IMPLEMENTED: wolf detail: ' + req.params.id);
};
// Handle wolf create on POST.
exports.wolf_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: wolf create POST');
};
// Handle wolf delete form on DELETE.
exports.wolf_delete = function(req, res) {
res.send('NOT IMPLEMENTED: wolf delete DELETE ' + req.params.id);
};
// Handle wolf update form on PUT.
exports.wolf_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: wolf update PUT' + req.params.id);
};
