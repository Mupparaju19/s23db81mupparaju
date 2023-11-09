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





exports.wolf_create_post = async function(req, res) {
console.log(req.body)
let document = new wolf();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"wolf_name":"shiva", "wolf_age":23, "wolf_price":10}

document.wolf_name = req.body.wolf_name;
document.wolf_age = req.body.wolf_age;
document.wolf_price = req.body.wolf_price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};







// Handle wolf delete form on DELETE.
exports.wolf_delete = function(req, res) {
res.send('NOT IMPLEMENTED: wolf delete DELETE ' + req.params.id);
};
// Handle wolf update form on PUT.
exports.wolf_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: wolf update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.wolf_view_all_Page = async function(req, res) {
try{
thewolf = await wolf.find();
res.render('wolf', { title: 'wolf Search Results', results: thewolf });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


