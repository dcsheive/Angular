const tasks = require('../controllers/tasks.js')
module.exports = function (app){
    app.get('/tasks',tasks.all)
    app.get('/tasks/new/:title',tasks.create)
    app.get('/tasks/:id',tasks.getOne)
    app.get('/tasks/update/:id/:column/:value',tasks.update)
    app.get('/tasks/delete/:id',tasks.delete)
}
