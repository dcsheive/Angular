const CONTROLLERNAME = require('../controllers/CONTROLLER.js')
module.exports = function (app){
    app.get('/', function(req, res) {
    })
    app.listen(8000, function() {
        console.log("listening on port 8000");
    })
    
}
