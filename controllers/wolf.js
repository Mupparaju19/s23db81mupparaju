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
    



    exports.wolf_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await wolf.findById( req.params.id)
        // Do updates of properties
        if(req.body.wolf_name)
        toUpdate.wolf_name = req.body.wolf_name;
        if(req.body.wolf_age) toUpdate.wolf_age = req.body.wolf_age;
        if(req.body.wolf_price) toUpdate.wolf_price = req.body.wolf_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
        }
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

// for a specific wolf.
exports.wolf_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await wolf.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    


    // Handle wolf delete on DELETE.
exports.wolf_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await wolf.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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

exports.wolf_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await wolf.findById( req.query.id)
    res.render('wolfdetail',
   { title: 'wolf Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a wolf.
// No body, no in path parameter, no query.
// Does not need to be async
exports.wolf_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('wolfcreate', { title: 'wolf Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a wolf.
// query provides the id
exports.wolf_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await wolf.findById(req.query.id)
    res.render('wolfupdate', { title: 'wolf Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle a delete one view with id from query
exports.wolf_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await wolf.findById(req.query.id)
    res.render('wolfdelete', { title: 'wolf Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
